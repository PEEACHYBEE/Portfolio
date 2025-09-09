import {useState, useEffect} from "react";
import { cn } from "../lib/utils";

const skills = [
    {name: "HTML/CSS", level: "Intermediate", category: "frontend"},
    {name: "Javascript", level: "Beginner", category: "frontend"},
    {name: "React", level: "Intermediate", category: "frontend"},
    {name: "Tailwind CSS", level: "Intermediate", category: "frontend"},
    
    {name: "Java", level: "Intermediate", category: "backend"},
    {name: "Python", level: "Beginner", category: "backend"},
    {name: "SQL", level: "Intermediate", category: "backend"},

    {name: "Git/Github", level: "Advanced", category: "tools"},
    {name: "VSCode", level: "Advanced", category: "tools"},
    {name: "Figma", level: "Advanced", category: "tools"},
    {name: "Canva", level: "Advanced", category: "tools"},
]

const categories = ["all","frontend", "backend", "tools"];

export const SkillsSection = () => {
    const getWidth = (level) => {
        switch (level) {
        case "Beginner":
            return "33%";
        case "Intermediate":
            return "66%";
        case "Advanced":
            return "100%";
        default:
            return "0%";
        }
    };

    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My<span className="text-primary"> Skills</span>
                </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button
                    key={key}
                    onClick={() => setActiveCategory(category)}   // fixed here
                    className={cn(
                        "cursor-pointer px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary/70 text-foreground hover:bg-secondary/80"
                    )}
                    >
                    {category}
                    </button>
                ))}    
            </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>

                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                            style={{ width: getWidth(skill.level) }}/>
                        </div>

                        <div className="text-right mt-2 text-sm text-muted-foreground">
                            {skill.level}
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};
