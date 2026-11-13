import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const MobileCallBar = () => (
  <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur">
    <a href="tel:+19415181657" className="flex items-center justify-center gap-2 py-3 font-semibold text-foreground"><Phone className="h-4 w-4 text-primary" />Call now</a>
    <Link to="/contact" className="flex items-center justify-center py-3 font-semibold bg-primary text-primary-foreground">Free quote</Link>
  </div>
);
export default MobileCallBar;
