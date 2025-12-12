import { ExternalLink, Figma, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "DENR-CAR UI Design",
        description: "A capstone project made for the Department of Environment and Natural Resources - Cordillera Administrative Region (DENR-CAR) to redesign their current website.",
        imageUrl: `${import.meta.env.BASE_URL}projects/capstoneUI.png`,
        tags: ["React", "Tailwind CSS"],
        demoUrl: "https://cordimap.site/",
        icons: [ExternalLink, Github],
    },
    {
        id: 2,
        title: "Terramap",
        description: "A capstone project made for the Department of Environment and Natural Resources - Cordillera Administrative Region (DENR-CAR) to view the statistical land cover changes overtime.",
        imageUrl: `${import.meta.env.BASE_URL}projects/terramapUI.png`,
        tags: ["React", "Tailwind CSS", "Python"],
        demoUrl: "https://terramap.cordimap.site/",
        icons: [ExternalLink],
    },
    {
        id: 3,
        title: "Terramap (Admin)",
        description: "A capstone project made for the Department of Environment and Natural Resources - Cordillera Administrative Region (DENR-CAR) to monitor the events in Terramap.",
        imageUrl: `${import.meta.env.BASE_URL}projects/terramapAdminUI.png`,
        tags: ["React", "Tailwind CSS", "ExpressJS", "MySQL"],
        demoUrl: "https://denrapmd.cordimap.site/",
        icons: [ExternalLink],
    },
    {
        id: 4,
        title: "My Study Pal",
        description: "In partial requirement of our IT Certification Review (ITE30) project, our team developed a UI design for a study application called My Study Pal. This app aims to help students stay concentrated and motivated while studying by providing features such as quizes, focus timers, and progress tracking.",
        imageUrl: `${import.meta.env.BASE_URL}projects/mystudypalUI.png`,
        tags: ["Figma"],
        demoUrl: "https://www.figma.com/proto/s7DFX6SHr1LVrUKNtYKNOt/KotlPacheTone_Prototype?node-id=119-2&p=f&t=88MkojrIY5vm95dr-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=119%3A2",
        icons: [Figma],
    },
    {
        id: 5,
        title: "Guidance Hub UI Design",
        description: "In partial requirement of our System Integration and Architecture (IT324) project, our team developed a UI for our proponent, Guidance Office. The UI is part of a system designed to help identify students who are at risk of failing, as well as professorts who have not yet submitted grades.",
        imageUrl: `${import.meta.env.BASE_URL}projects/guidancehubUI.png`,
        tags: ["Figma"],
        demoUrl: "https://www.figma.com/design/OxGLBQEJce4MgyrGd1CgMS/Guidance-Hub?node-id=0-1&t=InA0sr5HOhD2NNvZ-1",
        githubUrl: "#",
        icons: [Figma],
    },
    {
        id: 6,
        title: "SDG Website",
        description: "In partial requirement of our Web Technologies (IT312) project, team KOTL developed a web site made with HTML and CSS for promoting UNESCO Sustainable Development Goal 14: Life Below Water and Goal 15: Life On Land. This UI shows the different problems, goals, projects, and innovations for both SDGs.",
        imageUrl: `${import.meta.env.BASE_URL}projects/sdgUI.png`,
        tags: ["Figma", "HTML", "CSS"],
        demoUrl: "https://www.lifeco.site/",
        githubUrl: "https://github.com/team-kotl/lifeco-sdg-website.git",
        icons: [ExternalLink, Github],
    },
    {
        id: 7,
        title: "Alumania (Admin)",
        description: "In partial requirement of our Web Technologies (IT312) project, team KOTL developed a web site made with HTML and CSS for promoting UNESCO Sustainable Development Goal 14: Life Below Water and Goal 15: Life On Land. This UI shows the different problems, goals, projects, and innovations for both SDGs.",
        imageUrl: `${import.meta.env.BASE_URL}projects/alumaniaadminUI.png`,
        tags: ["Figma", "HTML", "CSS", "SQL"],
        demoUrl: "https://www.figma.com/design/tyxThuRiSW8E1G10yQeYpI/Alumania?node-id=0-1&p=f&t=RLZozN7j17MT0H0n-0",
        githubUrl: "https://github.com/team-kotl/lifeco-sdg-website.git",
        icons: [Figma, Github],
    },
    {
        id: 8,
        title: "Alumania Alumni ",
        description: "In partial requirement of our Web Technologies (IT312) project, team KOTL developed a web site made with HTML and CSS for promoting UNESCO Sustainable Development Goal 14: Life Below Water and Goal 15: Life On Land. This UI shows the different problems, goals, projects, and innovations for both SDGs.",
        imageUrl: `${import.meta.env.BASE_URL}projects/alumaniaalumniUI.png`,
        tags: ["Figma", "React", "Tailwind CSS", "ExpressJS", "SQL"],
        demoUrl: "https://www.figma.com/design/tyxThuRiSW8E1G10yQeYpI/Alumania?node-id=118-748&p=f&t=RLZozN7j17MT0H0n-0",
        githubUrl: "https://github.com/team-kotl/alumania",
        icons: [Figma, Github],
    },
    {
        id: 9,
        title: "SM UI Design",
        description: "In partial requirement of our Software Engineering (IT313) project, our team developed a UI for an automated billing system designed to enhance the Sio Mai Supermall's stall rental operations. With the help of this UI, the billing department will benefit from a streamlined and automated system that facilitated invoice creation and payment verification.",
        imageUrl: `${import.meta.env.BASE_URL}projects/smUI.png`,
        tags: ["Figma"],
        demoUrl: "https://www.figma.com/design/KFb0oqXip0GnJl7O6sw2NN/Soft-Eng?node-id=0-1&p=f",
        githubUrl: "#",
        icons: [Figma],
    },
    {
        id: 10,
        title: "Malayah UI Design",
        description: "In partial requirement of our Technoprenuership (IT315) project, our team developed a mobile UI and AI application that is catered for people who needs someone to talk. With Malayah, they can easily talk to someone who listens without judgement, providing a safe and anonymous space for expressing their thoughts and emotions.",
        imageUrl: `${import.meta.env.BASE_URL}projects/malayahUI.png`,
        tags: ["Figma", "Mobile UI"],
        demoUrl: "https://www.figma.com/design/lCpAQDvoSkkyTPEcW0EDtU/PSC?node-id=0-1&p=f",
        githubUrl: "#",
        icons: [Figma],
    },
    {
        id: 11,
        title: "Galleria Mobile UI Design",
        description: "In partial requirement of our Technology-Assisted Presentation and Communication (CS315) project, our team developed a mobile version UI for the Galleria website.",
        imageUrl: `${import.meta.env.BASE_URL}projects/galleriamobileUI.png`,
        tags: ["Figma", "Mobile UI"],
        demoUrl: "https://www.figma.com/design/f9FJy5YFnbP0PiCDGSig3O/TechPresentation?node-id=11-2&p=f",
        githubUrl: "#",
        icons: [Figma],
    },
    {
        id: 12,
        title: "Galleria UI Design",
        description: "In partial requirement of our Technology-Assisted Presentation and Communication (CS315) project, our team developed a UI to support local and independent artist to upload, showcase, and sell thri digital artowkrs. Users can also download these works or purchase them.",
        imageUrl: `${import.meta.env.BASE_URL}projects/galleriaUI.png`,
        tags: ["Figma"],
        demoUrl: "https://www.figma.com/design/f9FJy5YFnbP0PiCDGSig3O/TechPresentation?node-id=0-1&p=f",
        githubUrl: "#",
        icons: [Figma],
    },
    {
        id: 13,
        title: "Plug N' Go UI Design",
        description: "In partial requirement of our Requirements Analysis and Modeling (IT211) project, our team developed a mobile UI for our proponent. We determined their system requirements that will help their business and enhance their operational efficiency. The UI focuses on tracking electric vehicles (EV) details and detecting nearest charging ports to provide users with a convenient charging experience.",
        imageUrl: `${import.meta.env.BASE_URL}projects/plugngoUI.png`,
        tags: ["Figma"],
        demoUrl: "https://www.figma.com/design/hmzTLr3ETGLCYxErdU8B7m/Plug-N--Go-UI?node-id=0-1&p=f",
        githubUrl: "#",
        icons: [Figma],
    },
]

export const ProjectsSection = () => {
    return (
    <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Featured<span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the projecs I worked on during my years as IT student.
                    Each project highlights my skills in UI/UX design and my ability to program
                    using various tools and technologies. Click the icons below to explore the
                    designs and repositories.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover flex flex-col">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="bg-primary/10 font-medium border text-secondary-foreground text-xs px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm text-left">{project.description}</p>
                                <div className="mt-auto flex justify-start items-center pt-4">
                                    <div className="flex space-x-3">
                                        {project.icons.map((Icon, index) => {
                                            const link = Icon === Github ? project.githubUrl : project.demoUrl;
                                            return (
                                                <a 
                                                    key={index} 
                                                    href={link} 
                                                    className="text-foreground/80 hover:text-primary transition-colors duration-300" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                >
                                                    <Icon size={20} />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/peeachybee" target="_blank">
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};