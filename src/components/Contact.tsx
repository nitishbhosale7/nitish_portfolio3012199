"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, PhoneCall } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        window.open(`mailto:nitishbhosale7@gmail.com?subject=${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message)}&cc=${encodeURIComponent(formState.email)}`)
    };

    return (
        <section id="contact" className="py-20 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold font-heading mb-4">Get In Touch</h2>
                        <p className="text-slate-400">
                            Have a project in mind or want to discuss new opportunities?
                            I&apos;d love to hear from you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                                <h3 className="text-xl font-medium text-white mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <a href="mailto:nitishbhosale7@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors">
                                        <div className="p-3 bg-slate-800 rounded-lg">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <span>nitishbhosale7@gmail.com</span>
                                    </a>

                                    <a href="tel:+919156418924" className="flex items-center gap-4 text-slate-300">
                                        <div className="p-3 bg-slate-800 rounded-lg">
                                            <PhoneCall className="h-5 w-5" />
                                        </div>
                                        <span>+91-9156418924</span>
                                    </a>

                                    <a href="https://linkedin.com/in/nitishbhosale07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors">
                                        <div className="p-3 bg-slate-800 rounded-lg">
                                            <Linkedin className="h-5 w-5" />
                                        </div>
                                        <span>/in/nitishbhosale</span>
                                    </a>

                                    <a href="https://github.com/nitishbhosale7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors">
                                        <div className="p-3 bg-slate-800 rounded-lg">
                                            <Github className="h-5 w-5" />
                                        </div>
                                        <span>@nitishbhosale7</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-slate-600 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-slate-600 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-slate-600 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {isSubmitting ? "Sending..." : (
                                    <>Send Message <Send className="h-4 w-4" /></>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
