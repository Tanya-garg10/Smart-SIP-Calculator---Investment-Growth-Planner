import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Sparkles } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { type CalculatorValues } from "./CalculatorSection";

const formatCurrency = (value: number): string => {
    if (value >= 10000000) return `${(value / 10000000).toFixed(2)} Cr`;
    if (value >= 100000) return `${(value / 100000).toFixed(2)} L`;
    return new Intl.NumberFormat("en-IN").format(Math.round(value));
};

const calculateTopUpSIP = (
    monthlyInvestment: number,
    annualReturn: number,
    years: number,
    annualIncrease: number
) => {
    const monthlyRate = annualReturn / 100 / 12;
    let futureValue = 0;
    let totalInvested = 0;
    let currentMonthly = monthlyInvestment;

    for (let year = 0; year < years; year++) {
        for (let month = 0; month < 12; month++) {
            totalInvested += currentMonthly;
            futureValue = (futureValue + currentMonthly) * (1 + monthlyRate);
        }
        currentMonthly += annualIncrease;
    }

    return {
        futureValue: Math.round(futureValue),
        totalInvested: Math.round(totalInvested),
        wealthGained: Math.round(futureValue - totalInvested),
    };
};

interface TopUpSimulatorProps {
    values: CalculatorValues;
    baseFutureValue: number;
}

const TopUpSimulator = ({ values, baseFutureValue }: TopUpSimulatorProps) => {
    const [annualIncrease, setAnnualIncrease] = useState(500);

    const topUpResults = useMemo(
        () => calculateTopUpSIP(values.monthlyInvestment, values.annualReturn, values.years, annualIncrease),
        [values, annualIncrease]
    );

    const additionalWealth = topUpResults.futureValue - baseFutureValue;
    const percentageIncrease = ((additionalWealth / baseFutureValue) * 100).toFixed(1);

    return (
        <div className="rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-success/5 p-6 shadow-card">
            <div className="mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="font-heading text-lg font-semibold text-foreground">"What If?" Simulator</h3>
            </div>

            <p className="mb-4 text-sm text-muted-foreground">
                See how increasing your SIP annually can boost your wealth
            </p>

            <div className="mb-6">
                <div className="mb-2 flex items-baseline justify-between">
                    <label className="font-heading text-sm font-semibold text-foreground">
                        Annual SIP Increase
                    </label>
                    <span className="text-sm font-semibold text-primary">₹{annualIncrease.toLocaleString("en-IN")}</span>
                </div>
                <Slider
                    value={[annualIncrease]}
                    onValueChange={([v]) => setAnnualIncrease(v)}
                    min={0}
                    max={5000}
                    step={100}
                    className="mt-2"
                />
                <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>₹0</span>
                    <span>₹5,000</span>
                </div>
            </div>

            <motion.div
                key={additionalWealth}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-3"
            >
                <div className="rounded-lg bg-card p-4">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        New Future Value
                    </p>
                    <p className="font-heading text-2xl font-bold text-primary">
                        ₹{formatCurrency(topUpResults.futureValue)}
                    </p>
                </div>

                <div className="flex items-center gap-2 rounded-lg bg-success/10 p-4">
                    <TrendingUp className="h-5 w-5 flex-shrink-0 text-success" />
                    <div>
                        <p className="text-xs font-medium text-muted-foreground">Additional Wealth</p>
                        <p className="font-heading text-lg font-bold text-success">
                            ₹{formatCurrency(additionalWealth)} <span className="text-sm">({percentageIncrease}% more)</span>
                        </p>
                    </div>
                </div>

                <p className="text-xs text-muted-foreground">
                    By increasing your SIP by ₹{annualIncrease.toLocaleString("en-IN")} every year, you could gain an extra{" "}
                    ₹{formatCurrency(additionalWealth)} over {values.years} years!
                </p>
            </motion.div>
        </div>
    );
};

export default TopUpSimulator;
