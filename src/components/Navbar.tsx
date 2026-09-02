import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ArrowUpRight, Compass } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface NavbarProps {
 currentPath: string;
 navigate: (path: string) => void;
 onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate, onOpenSearch }) => {
 const [isScrolled, setIsScrolled] = useState(false);
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 useEffect(() => {
 const handleScroll = () => {
 setIsScrolled(window.scrollY > 20);
 };
 window.addEventListener('scroll', handleScroll);
 return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 const navLinks = [
 { label: 'Recipes', path: '/recipes' },
 { label: 'Videos', path: '/videos' },
 { label: 'Food Trails', path: '/food-trails' },
 ];

     const rightLinks = [
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

 const handleNav = (path: string) => {
 navigate(path);
 setMobileMenuOpen(false);
 window.scrollTo({ top: 0, behavior: 'smooth' });
 };

 return (
 <>
 <header
 className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 bg-[#FAF6EF]/95 backdrop-blur-md border-b border-[#E8DFD0] ${
 isScrolled ? 'py-3 shadow-sm' : 'py-4 md:py-5'
 }`}
 >
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
 {/* Brand Logo (Left) */}
 <button
 onClick={() => handleNav('/')}
 className="flex items-center space-x-3 text-left group focus:outline-none"
 >
 <img
 src="/logo.png"
 alt="Virtual Banjara Logo"
 className="h-10 w-10 md:h-11 md:w-11 object-contain rounded-full border border-[#D5CDBC] p-0.5 bg-white shadow-sm group-hover:scale-105 transition-transform"
 />
 <div className="flex flex-col">
 <span className="font-heading font-bold text-lg md:text-xl tracking-wider text-[#1B1A17] group-hover:text-[#C0392B] transition-colors flex items-center">
 VIRTUAL BANJARA<span className="text-xs align-top ml-0.5 text-[#C0392B]">®</span>
 </span>
 <span className="text-[9px] uppercase tracking-[0.2em] text-[#6F6A60] font-sans font-medium hidden sm:block">
 One Bite, One Story at a Time
 </span>
 </div>
 </button>

 {/* Desktop Navigation (Center) */}
 <nav className="hidden lg:flex items-center space-x-8">
 {navLinks.map((item) => {
 const isActive = currentPath === item.path || currentPath.startsWith(item.path + '/');
 return (
 <button
 key={item.path}
 onClick={() => handleNav(item.path)}
 className={`text-sm font-sans font-medium transition-colors relative py-1 ${
 isActive
 ? 'text-[#C0392B] font-semibold'
 : 'text-[#1B1A17] hover:text-[#C0392B]'
 }`}
 >
 {item.label}
 {isActive && (
 <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C0392B] rounded-full" />
 )}
 </button>
 );
 })}
 </nav>

 {/* Desktop Right Actions & Primary CTA */}
 <div className="hidden lg:flex items-center space-x-6">
 {rightLinks.map((item) => {
 const isActive = currentPath === item.path;
 return (
 <button
 key={item.path}
 onClick={() => handleNav(item.path)}
 className={`text-sm font-sans font-medium transition-colors ${
 isActive ? 'text-[#C0392B] font-semibold' : 'text-[#1B1A17] hover:text-[#C0392B]'
 }`}
 >
 {item.label}
 </button>
 );
 })}

 {/* Search Trigger */}
 <button
 onClick={onOpenSearch}
 aria-label="Search stories and recipes"
 className="p-2 text-[#1B1A17] hover:text-[#C0392B] hover:bg-[#F3EBDD] rounded-full transition-colors"
 >
 <Search className="w-4 h-4" />
 </button>

 {/* Primary Business CTA */}
 <button
 onClick={() => handleNav('/collaborate')}
 className="inline-flex items-center space-x-2 bg-[#1B1A17] hover:bg-[#C0392B] text-white text-xs uppercase tracking-widest font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow"
 >
 <span>Work With Us</span>
 <ArrowUpRight className="w-3.5 h-3.5" />
 </button>
 </div>

 {/* Mobile Right Controls */}
 <div className="flex lg:hidden items-center space-x-3">
 <button
 onClick={onOpenSearch}
 aria-label="Search"
 className="p-2 text-[#1B1A17] hover:text-[#C0392B] rounded-full"
 >
 <Search className="w-5 h-5" />
 </button>

 <button
 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
 aria-label="Toggle Menu"
 className="p-2 text-[#1B1A17] hover:text-[#C0392B] focus:outline-none"
 >
 {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
 </button>
 </div>
 </div>
 </header>

 {/* Mobile Drawer Menu */}
 {mobileMenuOpen && (
 <div className="fixed inset-0 z-30 bg-[#1B1A17]/40 backdrop-blur-sm lg:hidden">
 <div className="fixed top-[65px] left-0 right-0 bottom-0 bg-[#FAF6EF] border-t border-[#E8DFD0] p-6 overflow-y-auto flex flex-col justify-between">
 <div className="space-y-6">
 <div className="space-y-1">
 <span className="text-[11px] uppercase tracking-widest font-sans text-[#D4881E] block mb-2">
 Explore The Archive
 </span>
 {navLinks.map((item) => (
 <button
 key={item.path}
 onClick={() => handleNav(item.path)}
 className="block w-full text-left py-3 text-lg font-heading font-medium text-[#1B1A17] border-b border-[#E8DFD0] hover:text-[#C0392B]"
 >
 {item.label}
 </button>
 ))}
 </div>

 <div className="space-y-1 pt-2">
 <span className="text-[11px] uppercase tracking-widest font-sans text-[#D4881E] block mb-2">
 Brand & Partnerships
 </span>
 <button
 onClick={() => handleNav('/about')}
 className="block w-full text-left py-2.5 text-base font-sans font-medium text-[#1B1A17] hover:text-[#C0392B]"
 >
 About Virtual Banjara
 </button>
 <button
 onClick={() => handleNav('/contact')}
 className="block w-full text-left py-2.5 text-base font-sans font-medium text-[#1B1A17] hover:text-[#C0392B]"
 >
 Contact & Inquiries
 </button>
 </div>
 </div>

 <div className="pt-6 border-t border-[#E8DFD0] space-y-4">
 <button
 onClick={() => handleNav('/collaborate')}
 className="w-full bg-[#1B1A17] text-white py-3 px-4 rounded-xl text-center text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 shadow"
 >
 <span>Work With Us</span>
 <ArrowUpRight className="w-4 h-4" />
 </button>

 <div className="text-center text-xs text-[#6F6A60] font-sans">
 <span> Jaipur, Rajasthan • 726K+ YouTube Community</span>
 </div>
 </div>
 </div>
 </div>
 )}
 </>
 );
};
