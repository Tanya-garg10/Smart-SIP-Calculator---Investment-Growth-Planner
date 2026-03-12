import { useState, useRef, useCallback, useMemo } from "react";
import HeroSection from "@/components/HeroSection";
import CalculatorSection, { type CalculatorValues, calculateSIP } from "@/components/CalculatorSection";
import ChartSection from "@/components/ChartSection";
import AssumptionsPanel from "@/components/AssumptionsPanel";
import EducationSection from "@/components/EducationSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import Footer from "@/components/Footer";
import YearlyBreakdownTable from "@/components/YearlyBreakdownTable";
import GoalSelector from "@/components/GoalSelector";
import GoalInsight from "@/components/GoalInsight";
import TopUpSimulator from "@/components/TopUpSimulator";
import InflationToggle from "@/components/InflationToggle";
import ScenarioComparison from "@/components/ScenarioComparison";
import ExportReport from "@/components/ExportReport";

const Index = () => {
  const calcRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<CalculatorValues>({
    monthlyInvestment: 10000,
    annualReturn: 12,
    years: 15,
  });
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [includeInflation, setIncludeInflation] = useState(false);

  const scrollToCalc = useCallback(() => {
    calcRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const results = useMemo(() => calculateSIP(values), [values]);

  // Calculate inflation-adjusted value
  const inflationRate = 6; // 6% annual inflation
  const inflationAdjustedValue = useMemo(() => {
    if (!includeInflation) return results.futureValue;
    const inflationFactor = Math.pow(1 + inflationRate / 100, values.years);
    return Math.round(results.futureValue / inflationFactor);
  }, [results.futureValue, includeInflation, values.years]);

  return (
    <div className="min-h-screen">
      <HeroSection onStartClick={scrollToCalc} />
      <div ref={calcRef}>
        <CalculatorSection values={values} onChange={setValues} />
      </div>

      {/* Goal Selector & Inflation Toggle Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6">
            <GoalSelector selectedGoal={selectedGoal} onSelectGoal={setSelectedGoal} />
            <InflationToggle
              includeInflation={includeInflation}
              onToggle={setIncludeInflation}
              inflationRate={inflationRate}
            />
            {includeInflation && (
              <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-900 dark:bg-orange-950">
                <p className="text-sm text-orange-800 dark:text-orange-200">
                  <strong>Inflation-Adjusted Value:</strong> ₹
                  {new Intl.NumberFormat("en-IN").format(inflationAdjustedValue)} (in today's purchasing power)
                </p>
                <p className="mt-1 text-xs text-orange-700 dark:text-orange-300">
                  This shows what your ₹{new Intl.NumberFormat("en-IN").format(results.futureValue)} will be worth
                  in today's money, accounting for {inflationRate}% annual inflation.
                </p>
              </div>
            )}
            {selectedGoal && (
              <GoalInsight
                goalId={selectedGoal}
                futureValue={includeInflation ? inflationAdjustedValue : results.futureValue}
                years={values.years}
              />
            )}
            <ExportReport values={values} results={results} />
          </div>
        </div>
      </section>

      <ChartSection values={values} />

      {/* Top-Up Simulator & Yearly Breakdown */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Advanced Insights
              </h2>
              <p className="text-muted-foreground">
                Explore detailed breakdowns and what-if scenarios
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <TopUpSimulator values={values} baseFutureValue={results.futureValue} />
              <ScenarioComparison baseValues={values} />
            </div>
            <div className="mt-8">
              <YearlyBreakdownTable values={values} />
            </div>
          </div>
        </div>
      </section>

      <AssumptionsPanel />
      <EducationSection />
      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default Index;
