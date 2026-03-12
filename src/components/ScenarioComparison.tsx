import { useState } from "react";
import { motion } from "framer-motion";
import { GitCompare, TrendingUp } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { calculateSIP, type CalculatorValues } from "./CalculatorSection";

const formatCurrency = (value: number): string => {
    if (value >= 10000000) return `${(value / 10000000).toFixed(2)} Cr`;
    if (value >= 100000) return `${(value / 100000).toFixed(2)} L`;
    return new Intl.NumberFormat("en-IN").format(Math.round(value));
};

interface ScenarioComparisonProps {
    baseValues: CalculatorValues;
}

const ScenarioComparison = ({ baseValues }: ScenarioComparisonProps) => {
    const [planBMultiplier, setPlanBMultiplier] = useState(1.4);

    const planA = calculateSIP(baseValues);
    const planBValues = {
        ...baseValues,
        monthlyInvestment: Math.round(baseValues.monthlyInvestment * planBMultiplier),
    };
    const planB = calculateSIP(planBValues);

    const difference = planB.futureValue - planA.futureValue;
    const percentageIncrease = ((difference / planA.futureValue) * 100).toFixed(1);

    return (
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <div className="mb-4 flex items-center gap-2">
                <GitCompare className="h-5 w-5 text-primary" />
                <h3 className="font-heading text-lg font-semibold text-foreground">Scenario Comparison</h3>
            </div>

            <p className="mb-4 text-sm text-muted-foreground">
                Compare your current plan with a higher investment scenario
            </p>

            <div className="mb-6">
                <div className="mb-2 flex items-baseline justify-between">
                    <label className="font-heading text-sm font-semibold text-foreground">
                        Plan B Investment Multiplier
                    </label>
                    <span className="text-sm font-semibold text-primary">{planBMultiplier.toFixed(1)}x</span>
                </div>
                <Slider
                    value={[planBMultiplier]}
                    onValueChange={([v]) => setPlanBMultiplier(v)}
                    min={1.1}
                    max={3}
                    step={0.1}
                    className="mt-2"
                />
                <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>1.1x</span>
                    <span>3.0x</span>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <motion.div
                    key={planA.futureValue}
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    className="rounded-lg border border-border bg-secondary/50 p-4"
                >
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">Plan A (Current)</p>
                    <p className="mb-2 text-sm text-muted-foreground">
                        ₹{baseValues.monthlyInvestment.toLocaleString("en-IN")}/month
                    </p>
                    <p className="font-heading text-xl font-bold text-foreground">₹{formatCurrency(planA.futureValue)}</p>
                </motion.div>

                <motion.div
                    key={planB.futureValue}
                    initial={{ opacity: 0.8, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-lg border-2 border-primary bg-primary/5 p-4"
                >
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">Plan B (Higher SIP)</p>
                    <p className="mb-2 text-sm text-muted-foreground">
                        ₹{planBValues.monthlyInvestment.toLocaleString("en-IN")}/month
                    </p>
                    <p className="font-heading text-xl font-bold text-primary">₹{formatCurrency(planB.futureValue)}</p>
                </motion.div>
            </div>

            <motion.div
                key={difference}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 rounded-lg bg-success/10 p-4"
            >
                <TrendingUp className="h-5 w-5 flex-shrink-0 text-success" />
                <div>
                    <p className="text-xs font-medium text-muted-foreground">Additional Wealth with Plan B</p>
                    <p className="font-heading text-lg font-bold text-success">
                        ₹{formatCurrency(difference)} <span className="text-sm">({percentageIncrease}% more)</span>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default ScenarioComparison;
