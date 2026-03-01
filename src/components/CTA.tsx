"use client";


import { motion } from "framer-motion";

const CTA = () => {
    return (
        <section className="py-24 bg-gold-accent relative overflow-hidden">
            {/* Abstract circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48 blur-3xl" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                        Ready to Study <br className="md:hidden" /> <span className="text-dark-teal">Abroad?</span>
                    </h2>
                    <p className="text-white/80 text-lg md:text-2xl mb-12 font-medium">
                        Join thousands of successful Kerala students who have transformed <br className="hidden md:block" />
                        their lives with MaryLand Study Abroad.
                    </p>
                    <a href="#contact">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-dark-teal px-12 py-5 rounded-full font-bold text-xl shadow-2xl transition-all"
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
