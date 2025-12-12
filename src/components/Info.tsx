"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const skills = [
    "JavaScript (ES6+)", "TypeScript", "Salesforce CRM", "Lightning Web Components", "Salesforce Experience Cloud", "React", "Next.js",
    "Node.js", "Express", "PostgreSQL", "MongoDB", "Python",
    "Tailwind CSS", "HTML5/CSS3", "Git", "Docker", "Kubernetes"
];

const education = [
    {
        degree: "Bachelor of Engineering in Mechanical Engineering",
        school: "Savitribai Phule Pune University",
        year: "2018 - 2021",
    }
];

const certifications = [

    {
        name: "Salesforce Certified Administrator",
        issuer: "Salesforce",
        year: "2022",
    },

    {
        name: "Salesforce Certified Developer I",
        issuer: "Salesforce",
        year: "2022",
    },
    {
        name: "Salesforce Certified Platform App Builder",
        issuer: "Salesforce",
        year: "2023",
    },

    {
        name: "Salesforce Certified Experience Cloud Consultant",
        issuer: "Salesforce",
        year: "2023",
    },

    {
        name: "Salesforce Certified Agentforce Specialist",
        issuer: "Salesforce",
        year: "2025",
    }

];

export default function Info() {
    return (
        <section id="skills" className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-16"
                >

                    {/* Skills Column */}
                    <div>
                        <h2 className="text-3xl font-bold font-heading mb-8 flex items-center gap-2">
                            <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
                            Skills & Tech
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-300 rounded-lg text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Education & Certifications Column */}
                    <div>
                        <h2 className="text-3xl font-bold font-heading mb-8 flex items-center gap-2">
                            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                            Education & Certifications
                        </h2>

                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="mt-1 bg-slate-900 p-2 rounded-lg border border-slate-800 h-fit">
                                        <GraduationCap className="h-6 w-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-white">{edu.degree}</h3>
                                        <p className="text-slate-400">{edu.school}</p>
                                        <p className="text-sm text-slate-500 mt-1">{edu.year}</p>
                                    </div>
                                </div>
                            ))}

                            {certifications.map((cert, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="mt-1 bg-slate-900 p-2 rounded-lg border border-slate-800 h-fit">
                                        <Award className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-white">{cert.name}</h3>
                                        <p className="text-slate-400">{cert.issuer}</p>
                                        <p className="text-sm text-slate-500 mt-1">{cert.year}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
