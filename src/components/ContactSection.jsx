import { Linkedin, Mail, MapPin, Phone, Instagram, Facebook} from "lucide-react";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Get In<span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I’m always looking for ways to learn and grow. Let’s connect and 
                    explore ideas and opportunities together.
                </p>
                
                <div className="space-y-8 text-center">
                    <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
                    <div className="space-y-6">
                        <div className="flex flex-col items-center space-y-2">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Email</h4>
                                <a href="mailto:fresenc112233@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    fres.encarnacion01@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Location</h4>
                                <p className="text-muted-foreground">Baguio City, Philippines</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone</h4>
                                <p className="text-muted-foreground">+63 948 656 1837</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4"> Connect With Me </h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/freskkie-encarnacion-31429024a/" target="_blank">
                                <Linkedin />
                            </a>
                            <a href="https://www.instagram.com/freskkie.e/" target="_blank">
                                <Instagram />
                            </a>
                            <a href="https://www.facebook.com/peeachybee" target="_blank">
                                <Facebook />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
