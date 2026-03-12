import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";

const Contact = () => {
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
                    className="mx-auto max-w-5xl"
                >
                    <h1 className="mb-6 font-heading text-4xl font-bold text-foreground">Contact Us</h1>
                    <p className="mb-12 text-muted-foreground">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>

                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="space-y-6">
                            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                                <h2 className="mb-6 font-heading text-2xl font-semibold">Get in Touch</h2>
                                <form className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                                            Full Name
                                        </label>
                                        <Input id="name" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                                            Email Address
                                        </label>
                                        <Input id="email" type="email" placeholder="john@example.com" />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="mb-2 block text-sm font-semibold">
                                            Subject
                                        </label>
                                        <Input id="subject" placeholder="How can we help?" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                                            Message
                                        </label>
                                        <Textarea id="message" placeholder="Tell us more..." rows={5} />
                                    </div>
                                    <Button className="w-full gap-2">
                                        <Send className="h-4 w-4" />
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                                <h2 className="mb-6 font-heading text-2xl font-semibold">Contact Information</h2>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                            <Mail className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-heading font-semibold">Email</h3>
                                            <p className="text-sm text-muted-foreground">support@sipcalculator.com</p>
                                            <p className="text-sm text-muted-foreground">info@sipcalculator.com</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                            <Phone className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-heading font-semibold">Phone</h3>
                                            <p className="text-sm text-muted-foreground">+91 1800-123-4567 (Toll Free)</p>
                                            <p className="text-sm text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM IST</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                            <MapPin className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-heading font-semibold">Office</h3>
                                            <p className="text-sm text-muted-foreground">
                                                123 Financial District
                                                <br />
                                                Mumbai, Maharashtra 400001
                                                <br />
                                                India
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                                <h2 className="mb-4 font-heading text-xl font-semibold">Support</h2>
                                <p className="mb-4 text-sm text-muted-foreground">
                                    For technical support or calculator-related queries, please visit our support page or email us
                                    directly.
                                </p>
                                <Link to="/support">
                                    <Button variant="outline" className="w-full">
                                        Visit Support Center
                                    </Button>
                                </Link>
                            </div>

                            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                                <h2 className="mb-4 font-heading text-xl font-semibold">Feedback</h2>
                                <p className="mb-4 text-sm text-muted-foreground">
                                    We value your feedback! Help us improve by sharing your thoughts and suggestions.
                                </p>
                                <Link to="/feedback">
                                    <Button variant="outline" className="w-full">
                                        Share Feedback
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
