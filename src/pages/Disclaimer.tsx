import { motion } from "framer-motion";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Disclaimer = () => {
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
                    <div className="mb-6 flex items-center gap-3">
                        <AlertTriangle className="h-10 w-10 text-orange-600" />
                        <h1 className="font-heading text-4xl font-bold text-foreground">Disclaimer</h1>
                    </div>

                    <div className="space-y-6 text-muted-foreground">
                        <section className="rounded-xl border-2 border-orange-200 bg-orange-50 p-6 dark:border-orange-900 dark:bg-orange-950">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-orange-800 dark:text-orange-200">
                                Important Notice
                            </h2>
                            <p className="text-orange-700 dark:text-orange-300">
                                This SIP calculator is provided for educational and illustrative purposes only. The projections and
                                results shown are based on assumptions and hypothetical scenarios. They should not be considered as
                                financial advice, investment recommendations, or guarantees of future performance.
                            </p>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">Investment Risk</h2>
                            <p className="mb-3">
                                All investments in mutual funds and securities are subject to market risks. The value of investments can
                                go up or down based on market conditions, economic factors, and other variables beyond our control.
                            </p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li>Past performance is not indicative of future results</li>
                                <li>Returns shown are illustrative and not guaranteed</li>
                                <li>Actual returns may vary significantly from projections</li>
                                <li>You may lose some or all of your invested capital</li>
                            </ul>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">Not Financial Advice</h2>
                            <p className="mb-3">
                                The information provided through this calculator does not constitute:
                            </p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li>Professional financial, investment, or tax advice</li>
                                <li>A recommendation to buy, sell, or hold any security</li>
                                <li>An offer or solicitation to invest in any product</li>
                                <li>A substitute for consultation with qualified professionals</li>
                            </ul>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">Assumptions and Limitations</h2>
                            <p className="mb-3">The calculator makes several assumptions that may not reflect reality:</p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li>Constant rate of return throughout the investment period</li>
                                <li>Regular monthly investments without interruption</li>
                                <li>No consideration of taxes, fees, or transaction costs</li>
                                <li>No adjustment for changing market conditions</li>
                                <li>Simplified inflation calculations</li>
                            </ul>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">Consult Professionals</h2>
                            <p>
                                Before making any investment decisions, you should consult with qualified financial advisors, tax
                                professionals, and legal experts who can assess your individual circumstances, financial goals, and risk
                                tolerance. They can provide personalized advice tailored to your specific situation.
                            </p>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">No Liability</h2>
                            <p>
                                We shall not be liable for any losses, damages, or adverse consequences arising from your use of this
                                calculator or reliance on its results. You use this tool at your own risk and are solely responsible
                                for your investment decisions.
                            </p>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">Regulatory Compliance</h2>
                            <p>
                                This calculator is not affiliated with, endorsed by, or registered with any regulatory authority such as
                                SEBI (Securities and Exchange Board of India), AMFI (Association of Mutual Funds in India), or any
                                other financial regulatory body.
                            </p>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">Market Volatility</h2>
                            <p>
                                Financial markets are inherently volatile and unpredictable. Economic events, political changes, natural
                                disasters, and other unforeseen circumstances can significantly impact investment performance. The
                                calculator cannot account for such variables.
                            </p>
                        </section>

                        <section className="rounded-xl border-2 border-primary/30 bg-primary/5 p-6">
                            <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">Your Responsibility</h2>
                            <p className="mb-3">By using this calculator, you acknowledge that:</p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li>You have read and understood this disclaimer</li>
                                <li>You will not rely solely on calculator results for investment decisions</li>
                                <li>You will conduct your own research and due diligence</li>
                                <li>You accept full responsibility for your investment choices</li>
                                <li>You will seek professional advice when needed</li>
                            </ul>
                        </section>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default Disclaimer;
