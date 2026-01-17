import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <h1 className="text-2xl font-bold tracking-tighter">
              <span className="text-primary neon-text">CONSOLE</span>
              <span className="text-white">DOCTOR</span>
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection("pricing")} className="hover:text-primary transition-colors font-medium">Pricing</button>
              <button onClick={() => scrollToSection("why-us")} className="hover:text-primary transition-colors font-medium">Why Us</button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(57,255,20,0.5)] transition-all duration-300 font-bold"
              >
                Get a Quote
              </Button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection("services")} className="block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-white/5 hover:text-primary">Services</button>
            <button onClick={() => scrollToSection("pricing")} className="block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-white/5 hover:text-primary">Pricing</button>
            <button onClick={() => scrollToSection("why-us")} className="block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-white/5 hover:text-primary">Why Us</button>
            <div className="pt-4">
              <Button onClick={() => scrollToSection("contact")} className="w-full bg-primary text-primary-foreground font-bold">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
