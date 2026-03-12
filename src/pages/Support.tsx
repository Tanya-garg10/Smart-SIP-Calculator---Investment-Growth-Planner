import { motion } from "framer-motion";
import { ArrowLeft, HelpCircle, Book, Video, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";

const Support = () => {
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
                    <h1 className="mb-4 font-heading text-4xl font-bold text-foreground">Support Center</h1>
                    <p className="mb-12 text-muted-foreground">
                        Find answers to common questions and get help with using our SIP calculator.
                    </p>

                    <div className="mb-12 grid gap-6 md:grid-cols-3">
                        <div className="rounded-xl border border-border bg-card p-6 text-center shadow-card">
                            <Book className="mx-auto mb-3 h-10 w-10 text-primary" />
                            <h3 className="mb-2 font-heading font-semibold">Documentation</h3>
                            <p className="text-sm text-muted-foreground">Comprehensive guides and tutorials</p>
                        </div>
                        <div className="rounded-xl border border-border bg-card p-6 text-center shadow-card">
                            <Video className="mx-auto mb-3 h-10 w-10 text-primary" />
                            <h3 className="mb-2 font-heading font-semibold">Video Tutorials</h3>
                            <p className="text-sm text-muted-foreground">Step-by-step video guides</p>
                        </div>
                        <div className="rounded-xl border border-border bg-card p-6 text-center shadow-card">
                            <MessageCircle className="mx-auto mb-3 h-10 w-10 text-primary" />
                            <h3 className="mb-2 font-heading font-semibold">Live Chat</h3>
                            <p className="text-sm text-muted-foreground">Get instant help from our team</p>
                        </div>
                    </div>

                    <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                        <div className="mb-6 flex items-center gap-2">
                            <HelpCircle className="h-6 w-6 text-primary" />
                            <h2 className="font-heading text-2xl font-semibold">Frequently Asked Questions</h2>
                        </div>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How accurate is the SIP calculator?</AccordionTrigger>
                                <AccordionContent>
                                    The calculator provides estimates based on the parameters you input. It uses standard financial
                                    formulas for compound interest calculations. However, actual returns depend on market performance and
                                    can vary significantly. Always consult a financial advisor for personalized advice.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>What return rate should I use?</AccordionTrigger>
                                <AccordionContent>
                                    Historical equity mutual fund returns in India have averaged 12-15% annually over long periods, while
                                    debt funds typically return 6-8%. However, past performance doesn't guarantee future results. Use
                                    conservative estimates (10-12% for equity) for realistic projections.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger>Can I save my calculations?</AccordionTrigger>
                                <AccordionContent>
                                    Yes! You can download your investment summary using the "Download Investment Summary" button. This
                                    creates a text file with all your inputs and projected results that you can save for future
                                    reference.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger>What is the difference between SIP and lump sum?</AccordionTrigger>
                                <AccordionContent>
                                    SIP (Systematic Investment Plan) involves investing fixed amounts regularly, while lump sum is a
                                    one-time large investment. SIP offers rupee cost averaging, reduces timing risk, and is ideal for
                                    salaried individuals. Lump sum can work better when markets are low, but requires market timing
                                    skills.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5">
                                <AccordionTrigger>How does the inflation toggle work?</AccordionTrigger>
                                <AccordionContent>
                                    The inflation toggle adjusts your future value to show its purchasing power in today's terms. For
                                    example, if you'll have ₹10 lakhs in 10 years but inflation is 6% annually, the toggle shows what
                                    that amount can actually buy in today's money (approximately ₹5.58 lakhs).
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-6">
                                <AccordionTrigger>What is the Top-Up SIP simulator?</AccordionTrigger>
                                <AccordionContent>
                                    The Top-Up SIP simulator shows how increasing your monthly investment by a fixed amount each year can
                                    significantly boost your wealth. For example, if you start with ₹5,000/month and increase it by
                                    ₹500 annually, you'll invest more over time and benefit from higher compounding.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-7">
                                <AccordionTrigger>Is my data stored or shared?</AccordionTrigger>
                                <AccordionContent>
                                    No. All calculations are performed locally in your browser. We don't store your investment amounts or
                                    personal financial data on our servers. Your privacy is important to us. See our Privacy Policy for
                                    more details.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-8">
                                <AccordionTrigger>Can I use this for tax planning?</AccordionTrigger>
                                <AccordionContent>
                                    This calculator focuses on investment growth projections and doesn't include tax calculations. Tax
                                    treatment varies based on fund type, holding period, and your tax bracket. Consult a tax advisor for
                                    tax-efficient investment planning.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-9">
                                <AccordionTrigger>How do I choose the right mutual fund?</AccordionTrigger>
                                <AccordionContent>
                                    Consider your investment goals, time horizon, and risk tolerance. Use our Risk Assessment tool to
                                    understand your risk profile. Then research funds based on past performance (3-5 years), expense
                                    ratio, fund manager track record, and asset allocation. Diversify across fund types for balanced
                                    risk.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-10">
                                <AccordionTrigger>What if I need to stop my SIP temporarily?</AccordionTrigger>
                                <AccordionContent>
                                    Most mutual funds allow you to pause or stop SIPs without penalties. However, staying invested
                                    consistently helps you benefit from rupee cost averaging and compounding. If facing financial
                                    difficulties, consider reducing the SIP amount rather than stopping completely.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className="mt-8 rounded-xl border-2 border-primary/30 bg-primary/5 p-6">
                        <h3 className="mb-3 font-heading text-xl font-semibold">Still Need Help?</h3>
                        <p className="mb-4 text-muted-foreground">
                            Can't find what you're looking for? Our support team is here to help.
                        </p>
                        <Link to="/contact">
                            <button className="rounded-lg bg-primary px-6 py-3 font-heading font-semibold text-primary-foreground transition-all hover:brightness-110">
                                Contact Support
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default Support;
