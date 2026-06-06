"use client";

import { motion } from "framer-motion";
import { skills } from "@/src/data/skills";
import {
    Code2,
    Database,
    Paintbrush,
    GitBranch,
    Globe,
    Layers3,
    Server,
    Sparkles,
    Workflow,
} from "lucide-react";



export default function Skills() {
    return (
        <section id="skills" className="relative overflow-hidden py-28">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur-xl">
                        <Sparkles className="h-4 w-4" />
                        Technical Expertise
                    </div>

                    <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                        Skills &
                        <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                            {" "}
                            Technologies
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
                        Building scalable, modern, and immersive digital experiences using
                        contemporary frontend technologies and intelligent workflows.
                    </p>
                </motion.div>

                {/* Skill Grid */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08,
                            }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:bg-white/10"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10" />
                            </div>

                            {/* Icon */}
                            <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-300">
                                <skill.icon className="h-5 w-5" />
                            </div>

                            {/* Title */}
                            <h3 className="relative mb-5 text-2xl font-semibold text-white">
                                {skill.title}
                            </h3>

                            {/* Skill Pills */}
                            <div className="relative flex flex-wrap gap-3">
                                {skill.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/70 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            {/* Decorative Blur */}
                            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/20" />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mt-20 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:grid-cols-3"
                >
                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-cyan-300">9+</h3>
                        <p className="mt-2 text-white/60">Years Experience</p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-violet-300">20+</h3>
                        <p className="mt-2 text-white/60">Projects Delivered</p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-emerald-300">Modern</h3>
                        <p className="mt-2 text-white/60">
                            AI-Driven Development Workflow
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}