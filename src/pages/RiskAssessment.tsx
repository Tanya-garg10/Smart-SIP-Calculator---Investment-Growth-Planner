import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, AlertTriangle, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const questions = [
    {
        id: 1,
        question: "What is your investment time horizon?",
        options: [
            { text: "Less than 3 years", score: 1 },
            { text: "3-5 years", score: 2 },
            { text: "5-10 years", score: 3 },
            { text: "More than 10 years", score: 4 },
        ],
    },
    {
        id: 2,
        question: "How would you react if your investment dropped 20% in value?",
        options: [
            { text: "Sell immediately to prevent further loss", score: 1 },
            { text: "Feel anxious but hold on", score: 2 },
            { text: "Stay calm and wait for recovery", score: 3 },
            { text: "See it as a buying opportunity", score: 4 },
        ],
    },
    {
        id: 3,
        question: "What is your primary investment goal?",
        options: [
            { text: "Capital preservation", score: 1 },
            { text: "Steady income", score: 2 },
            { text: "Balanced growth", score: 3 },
            { text: "Maximum growth", score: 4 },
        ],
    },
    {
        id: 4,
        question: "What percentage of your income can you invest monthly?",
        options: [
            { text: "Less than 10%", score: 1 },
            { text: "10-20%", score: 2 },
            { text: "20-30%", score: 3 },
            { text: "More than 30%", score: 4 },
        ],
    },
    {
        id: 5,
        question: "How much investment experience do you have?",
        options: [
            { text: "None - I'm a beginner", score: 1 },
            { text: "Some - I've invested before", score: 2 },
            { text: "Moderate - Regular investor", score: 3 },
            { text: "Extensive - Experienced investor", score: 4 },
        ],
    },
];

const RiskAssessment = () => {
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (questionId: number, score: number) => {
        setAnswers({ ...answers, [questionId]: score });
    };

    const calculateRisk = () => {
        const total = Object.values(answers).reduce((sum, score) => sum + score, 0);
        const maxScore = questions.length * 4;
        const percentage = (total / maxScore) * 100;

        if (percentage <= 35) return { level: "Conservative", color: "text-blue-600", icon: Shield };
        if (percentage <= 60) return { level: "Moderate", color: "text-yellow-600", icon: AlertTriangle };
        return { level: "Aggressive", color: "text-red-600", icon: TrendingUp };
    };

    const getRiskProfile = () => {
        const risk = calculateRisk();
        const profiles = {
            Conservative: {
                description: "You prefer stability and capital preservation over high returns.",
                allocation: "Debt: 70-80%, Equity: 20-30%",
                funds: "Debt funds, liquid funds, conservative hybrid funds",
                advice: "Focus on capital protection with modest growth. Consider debt-heavy portfolios.",
            },
            Moderate: {
                description: "You seek balanced growth with manageable risk.",
                allocation: "Debt: 40-50%, Equity: 50-60%",
                funds: "Balanced hybrid funds, large-cap equity funds, diversified debt funds",
                advice: "Maintain a balanced portfolio with regular rebalancing between equity and debt.",
            },
            Aggressive: {
                description: "You're comfortable with volatility for potentially higher returns.",
                allocation: "Debt: 10-20%, Equity: 80-90%",
                funds: "Mid-cap, small-cap, sector funds, aggressive hybrid funds",
                advice: "Focus on growth-oriented equity funds with long-term perspective.",
            },
        };
        return profiles[risk.level as keyof typeof profiles];
    };

    const allAnswered = Object.keys(answers).length === questions.length;

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
                    className="mx-auto max-w-3xl"
                >
                    <h1 className="mb-4 font-heading text-4xl font-bold text-foreground">Risk Assessment</h1>
                    <p className="mb-8 text-muted-foreground">
                        Answer these questions to understand your risk profile and get personalized investment recommendations.
                    </p>

                    {!showResult ? (
                        <div className="space-y-6">
                            {questions.map((q, index) => (
                                <motion.div
                                    key={q.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="rounded-xl border border-border bg-card p-6 shadow-card"
                                >
                                    <h3 className="mb-4 font-heading text-lg font-semibold">
                                        {index + 1}. {q.question}
                                    </h3>
                                    <div className="space-y-2">
                                        {q.options.map((option) => (
                                            <button
                                                key={option.text}
                                                onClick={() => handleAnswer(q.id, option.score)}
                                                className={`w-full rounded-lg border-2 p-3 text-left transition-all ${answers[q.id] === option.score
                                                        ? "border-primary bg-primary/10 font-semibold"
                                                        : "border-border hover:border-primary/50"
                                                    }`}
                                            >
                                                {option.text}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}

                            <Button
                                onClick={() => setShowResult(true)}
                                disabled={!allAnswered}
                                className="w-full"
                                size="lg"
                            >
                                {allAnswered ? "View My Risk Profile" : `Answer All Questions (${Object.keys(answers).length}/${questions.length})`}
                            </Button>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-6"
                        >
                            <div className="rounded-xl border-2 border-primary bg-primary/5 p-8 text-center">
                                {(() => {
                                    const risk = calculateRisk();
                                    const Icon = risk.icon;
                                    return (
                                        <>
                                            <Icon className={`mx-auto mb-4 h-16 w-16 ${risk.color}`} />
                                            <h2 className="mb-2 font-heading text-3xl font-bold">Your Risk Profile</h2>
                                            <p className={`font-heading text-4xl font-bold ${risk.color}`}>{risk.level}</p>
                                        </>
                                    );
                                })()}
                            </div>

                            {(() => {
                                const profile = getRiskProfile();
                                return (
                                    <>
                                        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                                            <h3 className="mb-3 font-heading text-xl font-semibold">About Your Profile</h3>
                                            <p className="text-muted-foreground">{profile.description}</p>
                                        </div>

                                        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                                            <h3 className="mb-3 font-heading text-xl font-semibold">Recommended Asset Allocation</h3>
                                            <p className="mb-2 font-semibold text-primary">{profile.allocation}</p>
                                            <p className="text-sm text-muted-foreground">
                                                <strong>Suggested Funds:</strong> {profile.funds}
                                            </p>
                                        </div>

                                        <div className="rounded-xl border-2 border-success/30 bg-success/5 p-6">
                                            <h3 className="mb-3 font-heading text-xl font-semibold text-success">Investment Advice</h3>
                                            <p className="text-muted-foreground">{profile.advice}</p>
                                        </div>
                                    </>
                                );
                            })()}

                            <div className="flex gap-4">
                                <Button onClick={() => { setAnswers({}); setShowResult(false); }} variant="outline" className="flex-1">
                                    Retake Assessment
                                </Button>
                                <Link to="/" className="flex-1">
                                    <Button className="w-full">Try SIP Calculator</Button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default RiskAssessment;
