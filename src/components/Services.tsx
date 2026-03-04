"use client";


import { motion } from "framer-motion";
import { GraduationCap, FileText, BookOpen, Wallet, Headphones, MapPin } from "lucide-react";

const Services = () => {
    const services = [
        {
            title: "Admission Guidance",
            desc: "Comprehensive support for choosing the right course and university tailored to your profile.",
            icon: GraduationCap,
            delay: 0.1
        },
        {
            title: "Visa Support",
            desc: "Expert assistance with the visa application process, ensuring high success rates.",
            icon: FileText,
            delay: 0.2
        },
        {
            title: "IELTS Coaching",
            desc: "Result-oriented training for English proficiency tests by experienced trainers.",
            icon: BookOpen,
            delay: 0.3
        },
        {
            title: "Loan Assistance",
            desc: "Financial planning and guidance for securing education loans and scholarships.",
            icon: Wallet,
            delay: 0.4
        },
        {
            title: "Pre-Departure Briefing",
            desc: "Essential preparation for your life abroad, from packing to cultural integration.",
            icon: Headphones,
            delay: 0.5
        },
        {
            title: "Post-Arrival Support",
            desc: "We stay connected to help you settle into your new environment seamlessly.",
            icon: MapPin,
            delay: 0.6
        }
    ];

    return (
        <section id="why-choose-us" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-primary-teal font-bold tracking-widest uppercase text-sm"
                    >
                        Why Choose Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold mt-4 text-dark-text"
                    >
                        Empowering Your <span className="text-primary-teal">Ambitions</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        className="h-1 bg-gold-accent mx-auto mt-6 rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: service.delay, duration: 0.6, type: "spring", bounce: 0.3 }}
                            whileHover={{ y: -12 }}
                            className="p-10 rounded-3xl bg-white border border-slate-100 hover:border-primary-teal/30 transition-all duration-500 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary-teal/10 group relative overflow-hidden"
                        >
                            {/* Decorative gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 w-16 h-16 bg-background-light rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary-teal group-hover:to-dark-teal group-hover:text-white transition-all duration-500 group-hover:shadow-primary-teal/30">
                                <service.icon size={32} className="text-primary-teal group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="relative z-10 text-2xl font-bold mb-4 text-dark-text group-hover:text-primary-teal transition-colors duration-300">{service.title}</h3>
                            <p className="relative z-10 text-dark-text/70 leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
