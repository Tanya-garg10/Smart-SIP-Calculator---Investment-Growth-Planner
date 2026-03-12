import { motion } from "framer-motion";
import { ArrowLeft, Target, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-12">
                <Link to="/" className="mb-8 inline-flex items-center gap-2 text-primary hover:underline">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Calculator
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mx-auto max-w-4xl"
                >
                    <h1 className="mb-6 font-heading text-4xl font-bold text-foreground">About Us</h1>

                    <div className="space-y-8">
                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <div className="mb-4 flex items-center gap-3">
                                <Target className="h-6 w-6 text-primary" />
                                <h2 className="font-heading text-2xl font-semibold">Our Mission</h2>
                            </div>
                            <p className="mb-4 text-muted-foreground">
                                Our mission is to democratize financial education and empower individuals to make informed investment
                                decisions. We believe that everyone deserves access to transparent, easy-to-understand financial tools
                                that help them plan for their future.
                            </p>
                            <p className="text-muted-foreground">
                                Through our SIP calculator and educational resources, we aim to demystify systematic investment planning
                                and help people understand the power of disciplined, long-term investing.
                            </p>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <div className="mb-4 flex items-center gap-3">
                                <Users className="h-6 w-6 text-primary" />
                                <h2 className="font-heading text-2xl font-semibold">Our Team</h2>
                            </div>
                            <p className="mb-4 text-muted-foreground">
                                We are a passionate team of financial educators, software developers, and user experience designers
                                committed to creating the best financial planning tools available.
                            </p>
                            <div className="grid gap-4 md:grid-cols-3">
                                <div className="rounded-lg bg-secondary/50 p-4">
                                    <h3 className="mb-2 font-heading font-semibold">Financial Experts</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Certified professionals with decades of investment experience
                                    </p>
                                </div>
                                <div className="rounded-lg bg-secondary/50 p-4">
                                    <h3 className="mb-2 font-heading font-semibold">Tech Innovators</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Building intuitive tools that make finance accessible
                                    </p>
                                </div>
                                <div className="rounded-lg bg-secondary/50 p-4">
                                    <h3 className="mb-2 font-heading font-semibold">Educators</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Creating content that simplifies complex financial concepts
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <div className="mb-4 flex items-center gap-3">
                                <Briefcase className="h-6 w-6 text-primary" />
                                <h2 className="font-heading text-2xl font-semibold">Careers</h2>
                            </div>
                            <p className="mb-4 text-muted-foreground">
                                Join our mission to make financial education accessible to everyone. We're always looking for talented
                                individuals who are passionate about finance, technology, and education.
                            </p>
                            <div className="rounded-lg bg-primary/10 p-4">
                                <h3 className="mb-2 font-heading font-semibold text-primary">Open Positions</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Financial Content Writer</li>
                                    <li>• Full Stack Developer</li>
                                    <li>• UX/UI Designer</li>
                                    <li>• Marketing Specialist</li>
                                </ul>
                                <p className="mt-4 text-sm text-muted-foreground">
                                    Interested? Send your resume to <span className="font-semibold text-primary">careers@sipcalculator.com</span>
                                </p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
