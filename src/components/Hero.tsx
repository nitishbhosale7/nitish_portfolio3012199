"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <h2 className="text-cyan-400 font-medium mb-4 text-lg">Hello, I&apos;m Nitish Bhosale</h2>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                            Lead Developer <br />
                            <span className="text-gradient">(Salesforce)</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
                            Full Stack Developer specializing in Salesforce Experience Cloud, LWC, and modern web frameworks like Next.js.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link
                                href="#projects"
                                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-medium transition-colors flex items-center justify-center gap-2"
                            >
                                View Work <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="/resume.pdf"
                                className="px-8 py-3 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800/50 text-slate-300 rounded-full font-medium transition-all flex items-center justify-center gap-2"
                            >
                                Download CV <Download className="h-4 w-4" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 flex justify-center md:justify-end"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl rotate-6 opacity-20 blur-lg"></div>
                            <div className="relative w-full h-full bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
                                <img src="/profile.png" alt="Nitish Bhosale" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
