import { Code, User, Lightbulb } from "lucide-react";
export const AboutSection = () => {
    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibond">Passionate Web Developer and Tech Creator</h3>
                        <p className="text-muted-foreground">
                            Studying in Saint Louis University - Baguio City helped me develop
                            a strong knowledge in computers. 
                        </p>
                        <p className="text-muted-foreground">
                            With over 4 years of experience in web development, programming, 
                            and design. I specialize in creating responsive,
                            and user-friendly web applications using modern technologies.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> 
                                Get in touch
                            </a>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"  className="px-6 py-2 rounded-full border border-primary tect-primary hover:bg-primary/10 transition-colors duration-300"> 
                                View Resume
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with 
                                        frameworks
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        Designing intuitive user interface and seamless user
                                        experiences for web and mobile applications
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Lightbulb className="h-6 w-6 text-primary"/> 
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Problem Solving</h4>
                                    <p className="text-muted-foreground">
                                        Diagnosing issues, optimizing performance, and ensuring smooth user experiences
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};