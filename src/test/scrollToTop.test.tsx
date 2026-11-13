import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { act } from "react-dom/test-utils";
import { createRoot, Root } from "react-dom/client";
import { MemoryRouter, Routes, Route, useNavigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

const Top = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/services")}>go</button>;
};

let container: HTMLDivElement;
let root: Root;

const mountAt = (entry: string) => {
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
  act(() => {
    root.render(
      <MemoryRouter initialEntries={[entry]}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/services" element={<div>services</div>} />
        </Routes>
      </MemoryRouter>
    );
  });
};

describe("ScrollToTop", () => {
  let spy: ReturnType<typeof vi.spyOn>;
  beforeEach(() => {
    spy = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
  });
  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    spy.mockRestore();
  });

  it("scrolls to the top when a page opens", () => {
    mountAt("/");
    expect(spy).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "auto" });
  });

  it("scrolls to the top again after navigating to another page", () => {
    mountAt("/");
    spy.mockClear();
    const btn = container.querySelector("button")!;
    act(() => {
      btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(spy).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "auto" });
  });

  it("leaves in-page anchor jumps alone", () => {
    mountAt("/#quote");
    expect(spy).not.toHaveBeenCalled();
  });
});
