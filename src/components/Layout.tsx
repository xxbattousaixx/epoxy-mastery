import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import CookieConsent from './CookieConsent';
import MobileCallBar from './MobileCallBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pb-12 md:pb-0">{children}</main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
      <MobileCallBar />
    </div>
  );
};

export default Layout;
