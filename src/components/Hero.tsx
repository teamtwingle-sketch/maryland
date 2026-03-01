"use client";


import { motion } from "framer-motion";
import { ChevronDown, Globe, GraduationCap, Plane } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden bg-mesh">
            {/* Background elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                    y: [0, -50, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-teal/20 rounded-full blur-3xl -z-10"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -50, 0],
                    y: [0, 50, 0]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gold-accent/10 rounded-full blur-3xl -z-10"
            />

            <div className="container mx-auto text-center z-10">

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-dark-text mb-8 leading-[1.1]"
                >
                    Your Global Education <br className="hidden md:block" />
                    <span className="text-gradient">Journey Starts Here</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-lg md:text-2xl text-dark-text/60 max-w-3xl mx-auto mb-12"
                >
                    Trusted Study Abroad Consultants in Kerala. Empowering students to
                    reach world-class universities with professional guidance and end-to-end support.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#contact" className="w-full sm:w-auto">
                        <button className="bg-primary-teal text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-primary-teal/20 hover:bg-dark-teal hover:scale-105 active:scale-95 transition-all w-full">
                            Book Free Consultation
                        </button>
                    </a>
                    <a href="#why-choose-us" className="w-full sm:w-auto">
                        <button className="glass border border-dark-text/10 text-dark-text px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all w-full">
                            Our Services
                        </button>
                    </a>
                </motion.div>

                {/* Feature badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-20 flex flex-wrap justify-center gap-8 text-dark-text/40"
                >
                    <div className="flex items-center gap-2">
                        <GraduationCap size={20} />
                        <span className="font-semibold uppercase tracking-wider text-xs">Global Ranking</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Plane size={20} />
                        <span className="font-semibold uppercase tracking-wider text-xs">Visa Success Rate</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Globe size={20} />
                        <span className="font-semibold uppercase tracking-wider text-xs">500+ Partners</span>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 flex flex-col items-center gap-3"
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
