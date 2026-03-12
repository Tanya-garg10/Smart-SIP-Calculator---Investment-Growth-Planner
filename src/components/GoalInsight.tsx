import { motion } from "framer-motion";
import { Target, TrendingUp } from "lucide-react";
import { goals } from "./GoalSelector";

interface GoalInsightProps {
    goalId: string;
    futureValue: number;
    years: number;
}

const formatCurrency = (value: number): string => {
    if (value >= 10000000) return `${(value / 10000000).toFixed(2)} Cr`;
    if (value >= 100000) return `${(value / 100000).toFixed(2)} L`;
    return new Intl.NumberFormat("en-IN").format(Math.round(value));
};

const GoalInsight = ({ goalId, futureValue, years }: GoalInsightProps) => {
    const goal = goals.find((g) => g.id === goalId);
    if (!goal) return null;

    const Icon = goal.icon;
    const shortfall = goal.targetAmount - futureValue;
    const isAchievable = futureValue >= goal.targetAmount;
    const requiredMonthly = shortfall > 0 ? Math.ceil(shortfall / (years * 12)) : 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border border-primary/30 bg-primary/5 p-4"
        >
            <div className="mb-2 flex items-center gap-2">
                <Icon className="h-5 w-5 text-primary" />
                <h4 className="font-heading text-sm font-semibold text-foreground">Goal: {goal.name}</h4>
            </div>
            <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                    <span className="text-muted-foreground">Target Amount:</span>
                    <span className="font-semibold">₹{formatCurrency(goal.targetAmount)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-muted-foreground">Your Projection:</span>
                    <span className="font-semibold">₹{formatCurrency(futureValue)}</span>
                </div>
                {isAchievable ? (
                    <div className="mt-3 flex items-start gap-2 rounded-md bg-success/10 p-2 text-success">
                        <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <p className="text-xs">
                            Great! You're on track to achieve this goal in {years} years.
                        </p>
                    </div>
                ) : (
                    <div className="mt-3 flex items-start gap-2 rounded-md bg-orange-50 p-2 text-orange-700">
                        <Target className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <p className="text-xs">
                            To reach this goal, consider increasing your SIP by ₹{requiredMonthly.toLocaleString("en-IN")}/month.
                        </p>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default GoalInsight;
