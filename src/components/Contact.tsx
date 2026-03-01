"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const branches = [
    {
        city: "Kozhikode",
        type: "Head Office",
        address: "Second Floor, Adakandy Building, Mavoor Rd, Parayancheri, Kozhikode, Kerala 673004",
        phones: ["9400 878 333", "9400 878 444"],
        email: "Info@marylandstudyabroad.com"
    },
    {
        city: "Kannur",
        type: "Branch Office",
        address: "K T Complex, Opposite Thalukandathil Jewellery, City Centre, Main Road, Iritty, Kannur 670703",
        phones: ["9400 875 333"],
        email: "Info@marylandstudyabroad.com"
    },
    {
        city: "Manjeri",
        type: "Branch Office",
        address: "Medical College, Cherakkara Rd, near CH Centre, Vellarangal, Manjeri, Kerala 676121",
        phones: ["9400 879 333"],
        email: "Info@marylandstudyabroad.com"
    },
    {
        city: "Perinthalmanna",
        type: "Branch Office",
        address: "First Floor, New Building, Opposite MES Medical College, Malapparamb, Perinthalmanna, Kerala 699338",
        phones: ["9400 878 444"],
        email: "Info@marylandstudyabroad.com"
    },
    {
        city: "Kochi — Ernakulam",
        type: "Branch Office",
        address: "First Floor, Victoria Tower, Banerji Rd, Kacheripady, Kochi, Kerala 682018",
        phones: ["9447 499 200"],
        email: "Info@marylandstudyabroad.com"
    }
];

// WhatsApp Icon SVG
const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        destination: "",
        plans: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format message for WhatsApp - Professional Template
        const message = `✨ *MARYLAND STUDY ABROAD - WEBSITE INQUIRY* ✨\n` +
            `--------------------------------------------------\n` +
            `Dear MaryLand Team,\n\n` +
            `I am interested in your consulting services. Here are my inquiry details:\n\n` +
            `👤 *Full Name:* ${formData.name}\n` +
            `📧 *Email:* ${formData.email}\n` +
            `🌍 *Destination:* ${formData.destination || 'To be discussed'}\n` +
            `📝 *Message:* ${formData.plans}\n\n` +
            `--------------------------------------------------\n` +
            `I look forward to receiving professional guidance for my higher education journey.\n\n` +
            `Best regards,\n` +
            `${formData.name}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919400878333?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="py-24 bg-background-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-dark-text mb-6"
                    >
                        Our Presence Across <span className="text-primary-teal">Kerala</span>
                    </motion.h2>
                    <p className="text-dark-text/60 text-lg max-w-2xl mx-auto">
                        Visit any of our branches for professional guidance on your study abroad aspirations.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-8"
                    >
                        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-primary-teal/5">
                            <h3 className="text-2xl font-bold text-dark-text mb-8">Send a Message</h3>
                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            placeholder=" "
                                            className="w-full bg-background-light border-0 ring-1 ring-dark-text/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary-teal outline-none transition-all peer"
                                        />
                                        <label className="absolute left-6 top-4 text-dark-text/40 pointer-events-none transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:left-4 peer-focus:bg-white peer-focus:px-2 peer-focus:text-primary-teal peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">Full Name</label>
                                    </div>
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            placeholder=" "
                                            className="w-full bg-background-light border-0 ring-1 ring-dark-text/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary-teal outline-none transition-all peer"
                                        />
                                        <label className="absolute left-6 top-4 text-dark-text/40 pointer-events-none transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:left-4 peer-focus:bg-white peer-focus:px-2 peer-focus:text-primary-teal peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">Email Address</label>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <select
                                        name="destination"
                                        value={formData.destination}
                                        onChange={handleInputChange}
                                        className="w-full bg-background-light border-0 ring-1 ring-dark-text/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary-teal outline-none transition-all text-dark-text"
                                    >
                                        <option value="">Preferred Destination</option>
                                        <option>United Kingdom</option>
                                        <option>Canada</option>
                                        <option>Australia</option>
                                        <option>Germany</option>
                                        <option>Ireland</option>
                                    </select>
                                </div>
                                <div className="relative group">
                                    <textarea
                                        name="plans"
                                        value={formData.plans}
                                        onChange={handleInputChange}
                                        rows={4}
                                        placeholder=" "
                                        className="w-full bg-background-light border-0 ring-1 ring-dark-text/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary-teal outline-none transition-all peer"
                                    ></textarea>
                                    <label className="absolute left-6 top-4 text-dark-text/40 pointer-events-none transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:left-4 peer-focus:bg-white peer-focus:px-2 peer-focus:text-primary-teal peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">Tell us about your plans</label>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-dark-teal text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary-teal transition-all group active:scale-[0.98]"
                                >
                                    Send to WhatsApp <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </button>
                            </form>
                        </div>

                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark-text/60 hover:text-primary-teal shadow-md transition-colors"
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
                        {branches.map((branch, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-[2rem] shadow-sm border border-primary-teal/5 hover:border-primary-teal/20 transition-all group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-2 block">{branch.type}</span>
                                        <h4 className="text-xl font-bold text-dark-text group-hover:text-primary-teal transition-colors">{branch.city}</h4>
                                    </div>
                                    <div className="w-10 h-10 bg-primary-teal/5 rounded-xl flex items-center justify-center text-primary-teal group-hover:bg-primary-teal group-hover:text-white transition-all">
                                        <MapPin size={20} />
                                    </div>
                                </div>
                                <p className="text-dark-text/60 text-sm mb-6 leading-relaxed">
                                    {branch.address}
                                </p>
                                <div className="flex flex-wrap gap-4 text-sm font-semibold">
                                    {branch.phones.map(phone => (
                                        <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-dark-text hover:text-primary-teal transition-colors">
                                            <Phone size={14} /> {phone}
                                        </a>
                                    ))}
                                    <a href={`mailto:${branch.email}`} className="flex items-center gap-2 text-dark-text hover:text-primary-teal transition-colors truncate">
                                        <Mail size={14} /> {branch.email}
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating Buttons */}
            <div className="fixed bottom-10 right-10 z-[100] flex flex-col gap-4">
                <motion.a
                    href="https://wa.me/919400878333"
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40"
                >
                    <WhatsAppIcon className="w-8 h-8" />
                </motion.a>
                <div className="md:hidden">
                    <motion.button
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        className="fixed bottom-0 left-0 right-0 bg-primary-teal text-white py-4 font-bold text-center shadow-2xl rounded-t-3xl"
                    >
                        Free Consultation
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
