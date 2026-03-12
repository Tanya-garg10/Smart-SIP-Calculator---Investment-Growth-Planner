import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
                    <h1 className="mb-4 font-heading text-4xl font-bold text-foreground">Privacy Policy</h1>
                    <p className="mb-8 text-sm text-muted-foreground">Last updated: March 12, 2026</p>

                    <div className="space-y-6 text-muted-foreground">
                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">1. Information We Collect</h2>
                            <p className="mb-3">
                                We collect information that you provide directly to us when using our SIP calculator and related
                                services:
                            </p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li>Calculator inputs (investment amounts, duration, expected returns)</li>
                                <li>Contact information (name, email) if you reach out to us</li>
                                <li>Usage data and analytics to improve our services</li>
                                <li>Browser type, device information, and IP address</li>
                            </ul>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
                            <p className="mb-3">We use the collected information for:</p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li>Providing and improving our calculator services</li>
                                <li>Responding to your inquiries and support requests</li>
                                <li>Analyzing usage patterns to enhance user experience</li>
                                <li>Sending educational content (only if you opt-in)</li>
                                <li>Complying with legal obligations</li>
                            </ul>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">3. Data Storage and Security</h2>
                            <p className="mb-3">
                                Your calculator inputs are processed locally in your browser and are not stored on our servers unless
                                you explicitly save or share them. We implement industry-standard security measures to protect any data
                                we do collect.
                            </p>
                            <p>
                                However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute
                                security.
                            </p>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">4. Cookies and Tracking</h2>
                            <p className="mb-3">We use cookies and similar technologies to:</p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li>Remember your preferences (like theme selection)</li>
                                <li>Analyze site traffic and usage patterns</li>
                                <li>Improve site functionality and user experience</li>
                            </ul>
                            <p className="mt-3">You can control cookie settings through your browser preferences.</p>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">5. Third-Party Services</h2>
                            <p className="mb-3">
                                We may use third-party services for analytics and hosting. These services have their own privacy
                                policies:
                            </p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li>Google Analytics (for usage statistics)</li>
                                <li>Cloud hosting providers (for website infrastructure)</li>
                            </ul>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">6. Your Rights</h2>
                            <p className="mb-3">You have the right to:</p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li>Access the personal information we hold about you</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Lodge a complaint with a data protection authority</li>
                            </ul>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">7. Children's Privacy</h2>
                            <p>
                                Our services are not intended for individuals under 18 years of age. We do not knowingly collect
                                personal information from children.
                            </p>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">8. Changes to This Policy</h2>
                            <p>
                                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                                new policy on this page and updating the "Last updated" date.
                            </p>
                        </section>

                        <section className="rounded-xl border-2 border-primary/30 bg-primary/5 p-6">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">Contact Us</h2>
                            <p className="mb-2">If you have questions about this Privacy Policy, please contact us:</p>
                            <p>
                                Email: <span className="font-semibold text-primary">privacy@sipcalculator.com</span>
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
