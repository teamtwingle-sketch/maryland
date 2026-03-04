"use client";


import { motion } from "framer-motion";
import { ChevronDown, Globe, GraduationCap, Plane } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-48 md:pt-40 pb-32 md:pb-0 px-6 overflow-hidden bg-mesh">
            {/* Background elements */}
            <motion.div
                animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.4, 0.6, 0.4],
                    rotate: [0, 90, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary-teal/20 rounded-full blur-[100px] -z-10 mix-blend-multiply"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, -90, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-gold-accent/20 rounded-full blur-[100px] -z-10 mix-blend-multiply"
            />

            <div className="container mx-auto text-center z-10">

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-dark-text mb-6 md:mb-8 leading-[1.1]"
                >
                    Your Global Education <br className="hidden md:block" />
                    <span className="text-gradient">Journey Starts Here</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-base sm:text-lg md:text-2xl text-dark-text/60 max-w-3xl mx-auto mb-10 md:mb-12"
                >
                    Trusted Study Abroad Consultants in Kerala. Empowering students to
                    reach world-class universities with professional guidance and end-to-end support.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a href="#contact" className="w-full sm:w-auto relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary-teal to-gold-accent rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
                        <button className="relative bg-primary-teal text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-dark-teal group-hover:-translate-y-1 transition-all duration-300 w-full shadow-xl">
                            Book Free Consultation
                        </button>
                    </a>
                    <a href="#why-choose-us" className="w-full sm:w-auto group">
                        <button className="glass border border-dark-text/10 text-dark-text px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-white/80 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] group-hover:-translate-y-1 transition-all duration-300 w-full backdrop-blur-xl">
                            Our Services
                        </button>
                    </a>
                </motion.div>

                {/* Feature badges */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-20 flex flex-wrap justify-center gap-6 sm:gap-10 text-dark-text/60"
                >
                    <div className="flex items-center gap-3 px-6 py-3 rounded-2xl glass hover:-translate-y-1 transition-transform cursor-default">
                        <GraduationCap size={24} className="text-primary-teal" />
                        <span className="font-bold uppercase tracking-widest text-xs">Global Ranking</span>
                    </div>
                    <div className="flex items-center gap-3 px-6 py-3 rounded-2xl glass hover:-translate-y-1 transition-transform cursor-default">
                        <Plane size={24} className="text-gold-accent" />
                        <span className="font-bold uppercase tracking-widest text-xs">Visa Success Rate</span>
                    </div>
                    <div className="flex items-center gap-3 px-6 py-3 rounded-2xl glass hover:-translate-y-1 transition-transform cursor-default">
                        <Globe size={24} className="text-primary-teal" />
                        <span className="font-bold uppercase tracking-widest text-xs">500+ Partners</span>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 hidden md:flex flex-col items-center gap-3"
            >
                <span className="text-xs font-semibold text-dark-text/40 uppercase tracking-widest">Scroll to explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary-teal/40 to-transparent">
                    <motion.div
                        animate={{
                            y: [0, 48, 0],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-1/3 bg-primary-teal"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
