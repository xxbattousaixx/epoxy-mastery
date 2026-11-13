import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter, Routes, Route, useNavigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

const Top = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/services")}>go</button>;
};

const renderAt = (entry: string) =>
  render(
    <MemoryRouter initialEntries={[entry]}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/services" element={<div>services</div>} />
      </Routes>
    </MemoryRouter>
  );

describe("ScrollToTop", () => {
  let spy: ReturnType<typeof vi.spyOn>;
  beforeEach(() => {
    spy = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
  });
  afterEach(() => {
    spy.mockRestore();
    cleanup();
  });

  it("scrolls to the top when a page opens", () => {
    renderAt("/");
    expect(spy).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "auto" });
  });

  it("scrolls to the top again after navigating to another page", () => {
    renderAt("/");
    spy.mockClear();
    const btn = document.querySelector("button")!;
    btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(spy).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "auto" });
  });

  it("leaves in-page anchor jumps alone", () => {
    renderAt("/#quote");
    expect(spy).not.toHaveBeenCalled();
  });
});
