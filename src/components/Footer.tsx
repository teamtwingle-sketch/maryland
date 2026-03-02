"use client";

const Footer = () => {
    return (
        <footer className="bg-dark-teal pt-20 pb-32 md:pb-20 text-white/60">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-8 bg-white/10 p-4 rounded-2xl w-fit backdrop-blur-sm shadow-xl border border-white/5 group hover:bg-white/20 transition-all duration-500">
                            <img
                                src="/images/logo.png"
                                alt="MaryLand Logo"
                                className="h-24 md:h-36 w-auto object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="leading-relaxed mb-6">
                            Empowering students from Kerala with world-class education options and expert visa guidance since 2010.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-lg mb-8 uppercase tracking-widest text-sm">Head Office</h4>
                        <p className="mb-4">
                            MaryLand Study Abroad<br />
                            Second Floor, Adakandy Building<br />
                            Mavoor Rd, Parayancheri<br />
                            Kozhikode, Kerala 673004
                        </p>
                        <p>
                            Ph: 9400 878 333<br />
                            Email: Info@marylandstudyabroad.com
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-lg mb-8 uppercase tracking-widest text-sm">Services</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-gold-accent transition-colors">Admission Guidance</a></li>
                            <li><a href="#" className="hover:text-gold-accent transition-colors">Visa Assistance</a></li>
                            <li><a href="#" className="hover:text-gold-accent transition-colors">IELTS Training</a></li>
                            <li><a href="#" className="hover:text-gold-accent transition-colors">Scholarships</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-lg mb-8 uppercase tracking-widest text-sm">Legal</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-gold-accent transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gold-accent transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-gold-accent transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p>© 2026 MaryLand Study Abroad Pvt. Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
