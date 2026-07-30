import { Code, User, Lightbulb } from "lucide-react";
export const AboutSection = () => {
    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary rounded-full opacity-20 animate-pulse [animation-duration:5s]"></div>
                            <img 
                                src="/public/Freskkie.png" 
                                alt="Profile" 
                                className="relative rounded-full border-2 border-primary shadow-lg"
                            />
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibond">Passionate Web Developer and Tech Creator</h3>
                        <p className="text-muted-foreground">
                            A Cum Laude graduate of BS Information Technology from Saint Louis University - Baguio City, 
                            Philippines helped me develop a strong knowledge in computers. 
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
                            <a href={`${import.meta.env.BASE_URL}Resume.pdf`} target="_blank" rel="noopener noreferrer"  className="px-6 py-2 rounded-full border border-primary tect-primary hover:bg-primary/10 transition-colors duration-300"> 
                                View Resume
                            </a>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </section>
    );
};