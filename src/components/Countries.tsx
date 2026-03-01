"use client";


import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Countries = () => {
    const countries = [
        {
            name: "United Kingdom",
            code: "UK",
            image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800",
            description: "World-class education and heritage."
        },
        {
            name: "Canada",
            code: "CA",
            image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800",
            description: "Land of opportunities and diversity."
        },
        {
            name: "Australia",
            code: "AU",
            image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800",
            description: "Innovation and stunning quality of life."
        },
        {
            name: "Germany",
            code: "DE",
            image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800",
            description: "Engineering excellence and tuition-free options."
        },
        {
            name: "Ireland",
            code: "IE",
            image: "https://images.unsplash.com/photo-1590089415225-401ed6f9dbbc?auto=format&fit=crop&q=80&w=800",
            description: "Rich culture and booming tech sector."
        }
    ];

    return (
        <section id="countries" className="py-24 bg-background-light px-6">
            <div className="container mx-auto">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-dark-text mb-6"
                    >
                        Explore Global <br /> <span className="text-primary-teal">Destinations</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-dark-text/60 max-w-xl text-lg"
                    >
                        Find the perfect environment for your academic growth and career success.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {countries.map((country, index) => (
                        <motion.div
                            key={country.code}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="group relative h-[450px] overflow-hidden rounded-[2.5rem] cursor-pointer shadow-xl"
                        >
                            <div className="absolute inset-0">
                                <img
                                    src={country.image}
                                    alt={country.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-teal/90 via-dark-teal/20 to-transparent" />
                            </div>

                            <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="inline-block px-3 py-1 bg-gold-accent/90 text-white rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                                    {country.code}
                                </span>
                                <h3 className="text-3xl font-bold text-white mb-2">{country.name}</h3>
                                <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-6">
                                    {country.description}
                                </p>
                                <div className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                                    <span>Learn More</span>
                                    <ArrowRight size={20} className="text-gold-accent" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Countries;
