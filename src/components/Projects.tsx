"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Regeneron Brand Sites",
        description: "Built branding websites and lead capture flows on Salesforce Experience Cloud using LWC. Includes custom quizzes, carousels, and medicine calculators.",
        tags: ["Salesforce", "LWC", "Aura", "Experience Cloud"],
        github: "#",
        demo: "#",
        image: "/project1.jpg" // Placeholder
    },
    {
        title: "Custom Form Builder",
        description: "In-house form builder tool allowing dynamic creation and configuration of forms with automatic backend integration and field attributes.",
        tags: ["LWC", "Apex", "Dynamic Forms"],
        github: "#",
        demo: "#",
        image: "/project2.jpg" // Placeholder
    },
    {
        title: "Internal Automation Tools",
        description: "Suite of tools including a Ticket Management app for Salesforce changes and Python scripts/Figma plugins to optimize design workflows.",
        tags: ["Python", "Figma API", "Preact", "Automation"],
        github: "#",
        demo: "#",
        image: "/project3.jpg" // Placeholder
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">Featured Projects</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-cyan-500/10 hover:shadow-lg"
                            >
                                <div className="h-48 bg-slate-800 relative overflow-hidden">
                                    {/* Placeholder for project image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-600 bg-slate-900">
                                        <span>Project Preview</span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-xs font-medium px-2 py-1 bg-slate-800 text-slate-300 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <a href={project.github} className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                                            <Github className="h-4 w-4" /> Code
                                        </a>
                                        <a href={project.demo} className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                                            <ExternalLink className="h-4 w-4" /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
