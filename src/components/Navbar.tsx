"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket, Home, Compass, Globe, MessageCircle, Phone, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        handleScroll(); // Call immediately on load to prevent glitch
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "#why-choose-us" },
        { name: "Countries", href: "#countries" },
        { name: "Success Stories", href: "#success-stories" },
        { name: "Contact", href: "#contact" },
    ];

    const bottomNavLinks = [
        { name: "Home", href: "#", icon: Home },
        { name: "Services", href: "#why-choose-us", icon: Compass },
        { name: "Countries", href: "#countries", icon: Globe },
        { name: "Contact", href: "#contact", icon: MessageCircle },
    ];

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isScrolled ? "glass py-3" : "bg-transparent py-5"
                )}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 cursor-pointer pt-2 md:pt-0"
                    >
                        <a href="#">
                            <img
                                src="/images/logo.png"
                                alt="MaryLand Study Abroad"
                                className="h-28 sm:h-32 md:h-48 w-auto object-contain -my-4 md:-my-6"
                            />
                        </a>
                    </motion.div>

                    {/* Mobile Quick Action Dropdown Toggle */}
                    <div className="md:hidden flex items-center relative">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                            className="w-10 h-10 bg-primary-teal/5 text-primary-teal border border-primary-teal/10 rounded-xl flex items-center justify-center shadow-sm"
                        >
                            {mobileDropdownOpen ? <X size={20} /> : <Menu size={20} />}
                        </motion.button>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, idx) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-sm font-medium text-dark-text/70 hover:text-primary-teal transition-colors"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <a href="#contact">
                            <motion.button
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary-teal text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-primary-teal/20 hover:bg-dark-teal transition-all"
                            >
                                Apply Now
                            </motion.button>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Mobile Floating Dropdown */}
            <AnimatePresence>
                {mobileDropdownOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="fixed top-20 right-6 w-48 glass rounded-2xl shadow-2xl border border-white/20 overflow-hidden flex flex-col md:hidden z-40 bg-white/95"
                    >
                        <a href="#contact" onClick={() => setMobileDropdownOpen(false)} className="px-5 py-3.5 border-b border-primary-teal/10 flex items-center gap-3 text-dark-text font-bold text-sm hover:bg-primary-teal/10 transition-colors active:bg-primary-teal/20">
                            <Rocket size={18} className="text-primary-teal" /> Apply Now
                        </a>
                        <a href="tel:9400878333" onClick={() => setMobileDropdownOpen(false)} className="px-5 py-3.5 border-b border-primary-teal/10 flex items-center gap-3 text-dark-text font-bold text-sm hover:bg-primary-teal/10 transition-colors active:bg-primary-teal/20">
                            <Phone size={18} className="text-primary-teal" /> Call Us
                        </a>
                        <a href="https://wa.me/919400878333" target="_blank" onClick={() => setMobileDropdownOpen(false)} className="px-5 py-3.5 border-b border-primary-teal/10 flex items-center gap-3 text-dark-text font-bold text-sm hover:bg-primary-teal/10 transition-colors active:bg-primary-teal/20">
                            <MessageCircle size={18} className="text-[#25D366]" /> WhatsApp
                        </a>
                        <a href="https://www.instagram.com/marylandstudyabroad/?igshid=1k8qtruv4ds5s" target="_blank" onClick={() => setMobileDropdownOpen(false)} className="px-5 py-3.5 flex items-center gap-3 text-dark-text font-bold text-sm hover:bg-primary-teal/10 transition-colors active:bg-primary-teal/20">
                            <Instagram size={18} className="text-[#E1306C]" /> Instagram
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile App Bottom Navigation */}
            <div className="md:hidden fixed bottom-6 left-6 right-6 z-[60] bottom-bar-nav">
                <div className="glass rounded-[2rem] px-6 py-4 shadow-2xl border border-white/20 flex justify-between items-center bg-white/40">
                    {bottomNavLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className="flex flex-col items-center gap-1.5 text-dark-text/80 hover:text-primary-teal transition-colors active:scale-95"
                            >
                                <Icon size={24} />
                                <span className="text-[10px] font-bold">{link.name}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Navbar;
