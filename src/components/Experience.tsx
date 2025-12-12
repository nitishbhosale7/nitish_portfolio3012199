"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Lead Developer (Salesforce)",
        company: "Tag Worldwide (Dentsu Group) Pvt. Ltd.",
        period: "Nov 2023 - Present",
        description: "Leading a web development team to launch and maintain Salesforce Experience Cloud sites. Designing end-to-end solutions, database schema, and developing frontend using LWC. Overseeing deployments via DevOps Center and building internal automation tools using Python and Figma plugins.",
    },
    {
        role: "Cx Cloud Developer",
        company: "CRMIT Solutions Pvt. Ltd.",
        period: "Aug 2021 - Nov 2023",
        description: "Managed projects independently including client communication and deployment. Implemented DevOps practices using GitHub and Salesforce DevOps Center. Designed inventory management systems and integrated third-party APIs.",
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-slate-900/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">Work Experience</h2>

                    <div className="relative border-l border-slate-800 ml-4 md:ml-0 space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative pl-8 md:pl-12">
                                {/* Timeline Dot */}
                                <div className="absolute -left-3 top-0 w-6 h-6 bg-slate-900 border-4 border-cyan-500 rounded-full"></div>

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <span className="text-sm font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                                        {exp.period}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 mb-4 text-slate-300">
                                    <Briefcase className="h-4 w-4" />
                                    <span className="font-medium">{exp.company}</span>
                                </div>

                                <p className="text-slate-400 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
