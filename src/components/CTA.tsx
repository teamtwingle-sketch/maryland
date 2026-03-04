"use client";


import { motion } from "framer-motion";

const CTA = () => {
    return (
        <section className="py-32 bg-gold-accent relative overflow-hidden shadow-inner">
            {/* Abstract circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full -mr-32 -mt-32 blur-[80px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full -ml-48 -mb-48 blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 drop-shadow-sm">
                        Ready to Study <br className="md:hidden" /> <span className="text-dark-text bg-white/90 px-4 py-1 rounded-2xl inline-block mt-2 shadow-xl">Abroad?</span>
                    </h2>
                    <p className="text-white/90 text-lg md:text-2xl mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
                        Join thousands of successful Kerala students who have transformed <br className="hidden md:block" />
                        their lives with MaryLand Study Abroad.
                    </p>
                    <a href="#contact" className="inline-block group relative">
                        <div className="absolute -inset-1 bg-white rounded-full blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                        <motion.button
                            whileHover={{ y: -3, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                            whileTap={{ scale: 0.97 }}
                            className="relative bg-white text-dark-teal hover:text-primary-teal px-12 py-5 rounded-full font-bold text-xl shadow-2xl transition-colors duration-300"
                        >
                            Book Free Consultation
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
