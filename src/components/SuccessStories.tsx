"use client";


import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const SuccessStories = () => {
    const testimonials = [
        {
            name: "Rahul Nair",
            university: "University of Manchester, UK",
            content: "The guidance I received from MaryLand was exceptional. They made the complex visa process seem effortless. Highly recommended!",
            stars: 5,
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"
        },
        {
            name: "Sreya Menon",
            university: "Technical University of Munich, Germany",
            content: "Excellent IELTS coaching and very transparent admission support. They helped me find the perfect course in Germany.",
            stars: 5,
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sreya"
        },
        {
            name: "Abhishek K.",
            university: "University of Toronto, Canada",
            content: "MaryLand Study Abroad is definitely the best in Kerala. Their staff is extremely helpful and knowledgeable about Canada migration.",
            stars: 5,
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abhishek"
        },
        {
            name: "Anjali P.",
            university: "Monash University, Australia",
            content: "From application to pre-departure briefing, everything was handled professionally. I'm now happily settled in Melbourne.",
            stars: 5,
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali"
        }
    ];

    return (
        <section id="success-stories" className="py-24 overflow-hidden bg-white">
            <div className="container mx-auto px-6 mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-dark-text"
                        >
                            Our Students' <span className="text-primary-teal">Success</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-dark-text/60 mt-4 text-lg"
                        >
                            Real stories from students who achieved their dreams with us.
                        </motion.p>
                    </div>
                    <div className="flex items-center gap-2 text-gold-accent font-bold">
                        <span className="text-3xl">4.9/5</span>
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={20} fill="currentColor" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex gap-8 px-6 w-max"
                >
                    {[...testimonials, ...testimonials].map((story, index) => (
                        <div
                            key={index}
                            className="w-[400px] flex-shrink-0 glass p-10 rounded-[2.5rem] border border-primary-teal/5 relative group"
                        >
                            <Quote size={48} className="absolute top-6 right-8 text-primary-teal/10 group-hover:text-primary-teal/20 transition-colors" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(story.stars)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: 0.3 + (i * 0.1) }}
                                    >
                                        <Star size={16} className="text-gold-accent" fill="currentColor" />
                                    </motion.div>
                                ))}
                            </div>
                            <p className="text-dark-text/80 text-lg leading-relaxed mb-8 italic">
                                "{story.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={story.avatar}
                                    alt={story.name}
                                    className="w-12 h-12 rounded-full border-2 border-primary-teal/20"
                                />
                                <div>
                                    <h4 className="font-bold text-dark-text leading-tight">{story.name}</h4>
                                    <p className="text-primary-teal text-sm font-medium">{story.university}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SuccessStories;
