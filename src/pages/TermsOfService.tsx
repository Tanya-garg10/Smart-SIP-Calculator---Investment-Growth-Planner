import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const TermsOfService = () => {
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
                    <h1 className="mb-4 font-heading text-4xl font-bold text-foreground">Terms of Service</h1>
                    <p className="mb-8 text-sm text-muted-foreground">Last updated: March 12, 2026</p>

                    <div className="space-y-6 text-muted-foreground">
                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using this SIP Calculator website, you accept and agree to be bound by these Terms of
                                Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">2. Educational Purpose Only</h2>
                            <p className="mb-3">
                                This calculator is provided for educational and illustrative purposes only. It is designed to help you
                                understand potential investment outcomes based on assumed parameters.
                            </p>
                            <p className="font-semibold text-orange-600">
                                The results are estimates and should not be considered as financial advice, investment recommendations,
                                or guarantees of future returns.
                            </p>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">3. No Financial Advice</h2>
                            <p className="mb-3">
                                We are not financial advisors, and nothing on this website constitutes professional financial advice.
                                You should:
                            </p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li>Consult with a qualified financial advisor before making investment decisions</li>
                                <li>Conduct your own research and due diligence</li>
                                <li>Consider your personal financial situation, goals, and risk tolerance</li>
                                <li>Understand that past performance does not guarantee future results</li>
                            </ul>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">4. Accuracy of Information</h2>
                            <p className="mb-3">
                                While we strive to provide accurate and up-to-date information, we make no warranties or representations
                                about:
                            </p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li>The accuracy, completeness, or reliability of calculator results</li>
                                <li>The suitability of any investment strategy for your specific situation</li>
                                <li>The performance of any mutual fund or investment product</li>
                            </ul>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">5. User Responsibilities</h2>
                            <p className="mb-3">You agree to:</p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li>Use the calculator for lawful purposes only</li>
                                <li>Provide accurate information when using our services</li>
                                <li>Not attempt to manipulate, hack, or disrupt our services</li>
                                <li>Not use automated systems to access our website excessively</li>
                                <li>Respect intellectual property rights</li>
                            </ul>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">6. Limitation of Liability</h2>
                            <p className="mb-3">
                                To the fullest extent permitted by law, we shall not be liable for any:
                            </p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li>Investment losses or financial damages</li>
                                <li>Indirect, incidental, or consequential damages</li>
                                <li>Loss of profits, data, or business opportunities</li>
                                <li>Errors or omissions in calculator results</li>
                            </ul>
                            <p className="mt-3 font-semibold">
                                You use this calculator at your own risk and are solely responsible for any investment decisions you
                                make.
                            </p>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">7. Intellectual Property</h2>
                            <p>
                                All content, design, code, and materials on this website are protected by copyright and other
                                intellectual property laws. You may not copy, reproduce, or distribute our content without permission.
                            </p>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">8. Third-Party Links</h2>
                            <p>
                                Our website may contain links to third-party websites. We are not responsible for the content, privacy
                                practices, or terms of service of these external sites.
                            </p>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">9. Service Availability</h2>
                            <p>
                                We strive to maintain service availability but do not guarantee uninterrupted access. We reserve the
                                right to modify, suspend, or discontinue services at any time without notice.
                            </p>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">10. Changes to Terms</h2>
                            <p>
                                We may update these Terms of Service at any time. Continued use of our services after changes
                                constitutes acceptance of the new terms.
                            </p>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">11. Governing Law</h2>
                            <p>
                                These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall
                                be subject to the exclusive jurisdiction of courts in Mumbai, India.
                            </p>
                        </section>

                        <section className="rounded-xl border-2 border-primary/30 bg-primary/5 p-6">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">Contact Us</h2>
                            <p className="mb-2">If you have questions about these Terms of Service, please contact us:</p>
                            <p>
                                Email: <span className="font-semibold text-primary">legal@sipcalculator.com</span>
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsOfService;
