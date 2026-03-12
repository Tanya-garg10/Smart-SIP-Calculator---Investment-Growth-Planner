import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Calendar, PiggyBank, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const SIPGuide = () => {
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
                    <h1 className="mb-6 font-heading text-4xl font-bold text-foreground">Complete SIP Guide</h1>

                    <div className="space-y-8">
                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-4 font-heading text-2xl font-semibold">What is SIP?</h2>
                            <p className="mb-4 text-muted-foreground">
                                A Systematic Investment Plan (SIP) is a method of investing in mutual funds where you invest a fixed
                                amount regularly (monthly, quarterly, etc.) instead of investing a lump sum at once.
                            </p>
                            <p className="text-muted-foreground">
                                Think of it as a recurring deposit for mutual funds - you commit to investing a specific amount at
                                regular intervals, making it easier to build wealth systematically.
                            </p>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-4 font-heading text-2xl font-semibold">How Does SIP Work?</h2>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading font-bold text-primary">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="mb-1 font-heading font-semibold">Choose Your Amount</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Decide how much you want to invest regularly (e.g., ₹5,000 per month)
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading font-bold text-primary">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="mb-1 font-heading font-semibold">Select a Mutual Fund</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Pick a mutual fund scheme that aligns with your financial goals and risk appetite
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading font-bold text-primary">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="mb-1 font-heading font-semibold">Auto-Debit Setup</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Set up automatic deduction from your bank account on a specific date each month
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading font-bold text-primary">
                                        4
                                    </div>
                                    <div>
                                        <h3 className="mb-1 font-heading font-semibold">Units Allocation</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Units are purchased at the prevailing NAV (Net Asset Value) on the investment date
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-4 font-heading text-2xl font-semibold">Benefits of SIP</h2>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="rounded-lg border border-border p-4">
                                    <TrendingUp className="mb-2 h-6 w-6 text-success" />
                                    <h3 className="mb-2 font-heading font-semibold">Rupee Cost Averaging</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Buy more units when prices are low and fewer when high, averaging out your cost
                                    </p>
                                </div>
                                <div className="rounded-lg border border-border p-4">
                                    <Calendar className="mb-2 h-6 w-6 text-success" />
                                    <h3 className="mb-2 font-heading font-semibold">Disciplined Investing</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Automated investments help you stay consistent regardless of market conditions
                                    </p>
                                </div>
                                <div className="rounded-lg border border-border p-4">
                                    <PiggyBank className="mb-2 h-6 w-6 text-success" />
                                    <h3 className="mb-2 font-heading font-semibold">Start Small</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Begin with as little as ₹500 per month - no need for large lump sums
                                    </p>
                                </div>
                                <div className="rounded-lg border border-border p-4">
                                    <Shield className="mb-2 h-6 w-6 text-success" />
                                    <h3 className="mb-2 font-heading font-semibold">Power of Compounding</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Returns generate their own returns over time, accelerating wealth creation
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-4 font-heading text-2xl font-semibold">SIP vs Lump Sum</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-border">
                                            <th className="p-3 text-left font-heading">Aspect</th>
                                            <th className="p-3 text-left font-heading">SIP</th>
                                            <th className="p-3 text-left font-heading">Lump Sum</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-muted-foreground">
                                        <tr className="border-b border-border">
                                            <td className="p-3 font-semibold">Investment Amount</td>
                                            <td className="p-3">Small, regular amounts</td>
                                            <td className="p-3">Large one-time investment</td>
                                        </tr>
                                        <tr className="border-b border-border">
                                            <td className="p-3 font-semibold">Market Timing</td>
                                            <td className="p-3">Not required</td>
                                            <td className="p-3">Critical for returns</td>
                                        </tr>
                                        <tr className="border-b border-border">
                                            <td className="p-3 font-semibold">Risk</td>
                                            <td className="p-3">Lower (averaged out)</td>
                                            <td className="p-3">Higher (timing dependent)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-semibold">Best For</td>
                                            <td className="p-3">Salaried individuals</td>
                                            <td className="p-3">Those with surplus funds</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="rounded-xl border-2 border-primary/30 bg-primary/5 p-6">
                            <h2 className="mb-4 font-heading text-2xl font-semibold text-primary">Getting Started</h2>
                            <ol className="space-y-3 text-muted-foreground">
                                <li>1. Assess your financial goals and risk tolerance</li>
                                <li>2. Decide on the investment amount you can commit monthly</li>
                                <li>3. Research and select suitable mutual fund schemes</li>
                                <li>4. Complete KYC (Know Your Customer) requirements</li>
                                <li>5. Set up your SIP with auto-debit instructions</li>
                                <li>6. Review your portfolio periodically (quarterly or annually)</li>
                            </ol>
                        </section>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default SIPGuide;
