import { motion } from "framer-motion";
import { ArrowLeft, Wallet, BarChart3, Users, Building } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const MutualFunds101 = () => {
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
                    <h1 className="mb-6 font-heading text-4xl font-bold text-foreground">Mutual Funds 101</h1>

                    <div className="space-y-8">
                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-4 font-heading text-2xl font-semibold">What are Mutual Funds?</h2>
                            <p className="mb-4 text-muted-foreground">
                                A mutual fund is an investment vehicle that pools money from multiple investors to invest in a
                                diversified portfolio of stocks, bonds, or other securities. It's managed by professional fund managers
                                who make investment decisions on behalf of the investors.
                            </p>
                            <div className="rounded-lg bg-primary/10 p-4">
                                <p className="text-sm text-muted-foreground">
                                    <strong className="text-foreground">Simple Analogy:</strong> Think of it like a basket of fruits.
                                    Instead of buying individual fruits (stocks), you buy a share of the entire basket, giving you
                                    variety and reducing risk.
                                </p>
                            </div>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-4 font-heading text-2xl font-semibold">Types of Mutual Funds</h2>
                            <div className="space-y-4">
                                <div className="rounded-lg border border-border p-4">
                                    <div className="mb-2 flex items-center gap-2">
                                        <BarChart3 className="h-5 w-5 text-primary" />
                                        <h3 className="font-heading font-semibold">Equity Funds</h3>
                                    </div>
                                    <p className="mb-2 text-sm text-muted-foreground">
                                        Invest primarily in stocks. Higher risk, higher potential returns.
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        <strong>Best for:</strong> Long-term goals (5+ years), growth-oriented investors
                                    </p>
                                </div>

                                <div className="rounded-lg border border-border p-4">
                                    <div className="mb-2 flex items-center gap-2">
                                        <Building className="h-5 w-5 text-primary" />
                                        <h3 className="font-heading font-semibold">Debt Funds</h3>
                                    </div>
                                    <p className="mb-2 text-sm text-muted-foreground">
                                        Invest in fixed-income securities like bonds. Lower risk, stable returns.
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        <strong>Best for:</strong> Short to medium-term goals, conservative investors
                                    </p>
                                </div>

                                <div className="rounded-lg border border-border p-4">
                                    <div className="mb-2 flex items-center gap-2">
                                        <Wallet className="h-5 w-5 text-primary" />
                                        <h3 className="font-heading font-semibold">Hybrid Funds</h3>
                                    </div>
                                    <p className="mb-2 text-sm text-muted-foreground">
                                        Mix of equity and debt. Balanced risk and returns.
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        <strong>Best for:</strong> Moderate risk appetite, balanced portfolio
                                    </p>
                                </div>

                                <div className="rounded-lg border border-border p-4">
                                    <div className="mb-2 flex items-center gap-2">
                                        <Users className="h-5 w-5 text-primary" />
                                        <h3 className="font-heading font-semibold">Index Funds</h3>
                                    </div>
                                    <p className="mb-2 text-sm text-muted-foreground">
                                        Track a market index like Nifty 50. Low cost, passive management.
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        <strong>Best for:</strong> Cost-conscious investors, market returns seekers
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-4 font-heading text-2xl font-semibold">Key Terms to Know</h2>
                            <div className="space-y-3">
                                <div className="border-l-4 border-primary pl-4">
                                    <h3 className="mb-1 font-heading font-semibold">NAV (Net Asset Value)</h3>
                                    <p className="text-sm text-muted-foreground">
                                        The price per unit of the mutual fund. It's calculated by dividing the total value of all assets
                                        minus liabilities by the number of outstanding units.
                                    </p>
                                </div>
                                <div className="border-l-4 border-primary pl-4">
                                    <h3 className="mb-1 font-heading font-semibold">Expense Ratio</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Annual fee charged by the fund for managing your money, expressed as a percentage. Lower is better.
                                    </p>
                                </div>
                                <div className="border-l-4 border-primary pl-4">
                                    <h3 className="mb-1 font-heading font-semibold">Exit Load</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Fee charged when you redeem units before a specified period. Encourages long-term investing.
                                    </p>
                                </div>
                                <div className="border-l-4 border-primary pl-4">
                                    <h3 className="mb-1 font-heading font-semibold">AUM (Assets Under Management)</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Total market value of assets managed by the fund. Larger AUM often indicates investor confidence.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="rounded-xl border border-border bg-card p-6 shadow-card">
                            <h2 className="mb-4 font-heading text-2xl font-semibold">How to Choose a Mutual Fund</h2>
                            <ol className="space-y-3 text-muted-foreground">
                                <li className="flex gap-3">
                                    <span className="font-heading font-bold text-primary">1.</span>
                                    <span>
                                        <strong className="text-foreground">Define Your Goals:</strong> Retirement, house, education, etc.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-heading font-bold text-primary">2.</span>
                                    <span>
                                        <strong className="text-foreground">Assess Risk Tolerance:</strong> How much volatility can you
                                        handle?
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-heading font-bold text-primary">3.</span>
                                    <span>
                                        <strong className="text-foreground">Check Past Performance:</strong> Look at 3-5 year returns, not
                                        just recent gains
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-heading font-bold text-primary">4.</span>
                                    <span>
                                        <strong className="text-foreground">Compare Expense Ratios:</strong> Lower fees mean more money
                                        stays invested
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-heading font-bold text-primary">5.</span>
                                    <span>
                                        <strong className="text-foreground">Review Fund Manager Track Record:</strong> Experience matters
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-heading font-bold text-primary">6.</span>
                                    <span>
                                        <strong className="text-foreground">Diversify:</strong> Don't put all eggs in one basket
                                    </span>
                                </li>
                            </ol>
                        </section>

                        <section className="rounded-xl border-2 border-orange-200 bg-orange-50 p-6 dark:border-orange-900 dark:bg-orange-950">
                            <h2 className="mb-4 font-heading text-2xl font-semibold text-orange-800 dark:text-orange-200">
                                Common Mistakes to Avoid
                            </h2>
                            <ul className="space-y-2 text-sm text-orange-700 dark:text-orange-300">
                                <li>❌ Chasing past performance without understanding the fund</li>
                                <li>❌ Investing without clear financial goals</li>
                                <li>❌ Panic selling during market downturns</li>
                                <li>❌ Ignoring expense ratios and hidden costs</li>
                                <li>❌ Over-diversifying (too many funds)</li>
                                <li>❌ Not reviewing portfolio periodically</li>
                            </ul>
                        </section>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default MutualFunds101;
