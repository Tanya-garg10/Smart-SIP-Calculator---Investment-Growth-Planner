import { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CalculatorValues {
  monthlyInvestment: number;
  annualReturn: number;
  years: number;
}

interface CalculatorResults {
  totalInvested: number;
  futureValue: number;
  wealthGained: number;
}

const formatCurrency = (value: number): string => {
  if (value >= 10000000) return `${(value / 10000000).toFixed(2)} Cr`;
  if (value >= 100000) return `${(value / 100000).toFixed(2)} L`;
  return new Intl.NumberFormat("en-IN").format(Math.round(value));
};

const formatNumber = (value: number): string => {
  return new Intl.NumberFormat("en-IN").format(value);
};

const calculateSIP = (values: CalculatorValues): CalculatorResults => {
  const { monthlyInvestment, annualReturn, years } = values;
  const monthlyRate = annualReturn / 100 / 12;
  const months = years * 12;
  const totalInvested = monthlyInvestment * months;

  let futureValue = 0;
  if (monthlyRate > 0) {
    futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  } else {
    futureValue = totalInvested;
  }

  return {
    totalInvested,
    futureValue: Math.round(futureValue),
    wealthGained: Math.round(futureValue - totalInvested),
  };
};

const InputField = ({
  label,
  id,
  value,
  onChange,
  min,
  max,
  step,
  unit,
  helperText,
  tooltip,
}: {
  label: string;
  id: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  unit: string;
  helperText: string;
  tooltip?: string;
}) => (
  <div className="mb-6">
    <div className="mb-2 flex items-baseline justify-between">
      <div className="flex items-center gap-1.5">
        <label htmlFor={id} className="font-heading text-sm font-semibold text-foreground">
          {label}
        </label>
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-3.5 w-3.5 cursor-help text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="text-xs">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <span className="text-xs text-muted-foreground">{helperText}</span>
    </div>
    <div className="mb-3 flex items-center gap-3">
      <input
        id={id}
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => {
          const v = parseFloat(e.target.value);
          if (!isNaN(v)) onChange(Math.min(max, Math.max(min, v)));
        }}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 font-body text-base text-foreground shadow-soft transition-shadow focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
        aria-describedby={`${id}-helper`}
      />
      <span className="whitespace-nowrap rounded-md bg-secondary px-3 py-2 font-heading text-sm font-medium text-muted-foreground">
        {unit}
      </span>
    </div>
    <Slider
      value={[value]}
      onValueChange={([v]) => onChange(v)}
      min={min}
      max={max}
      step={step}
      className="mt-1"
      aria-label={`${label} slider`}
    />
    <div className="mt-1 flex justify-between text-xs text-muted-foreground">
      <span>{formatNumber(min)}</span>
      <span>{formatNumber(max)}</span>
    </div>
    <span id={`${id}-helper`} className="sr-only">{helperText}</span>
  </div>
);

const ResultCard = ({ label, value, variant }: { label: string; value: string; variant: "primary" | "success" | "muted" }) => {
  const bgMap = {
    primary: "bg-primary/10 border-primary/20",
    success: "bg-success/10 border-success/20",
    muted: "bg-secondary border-border",
  };
  const textMap = {
    primary: "text-primary",
    success: "text-success",
    muted: "text-foreground",
  };
  return (
    <motion.div
      key={value}
      initial={{ opacity: 0.5, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`rounded-lg border p-4 text-center ${bgMap[variant]}`}
    >
      <p className="mb-1 font-body text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className={`font-heading text-xl font-bold md:text-2xl ${textMap[variant]}`}>{value}</p>
    </motion.div>
  );
};

const CalculatorSection = ({
  values,
  onChange,
}: {
  values: CalculatorValues;
  onChange: (v: CalculatorValues) => void;
}) => {
  const results = useMemo(() => calculateSIP(values), [values]);

  const update = useCallback(
    (key: keyof CalculatorValues) => (v: number) => onChange({ ...values, [key]: v }),
    [values, onChange]
  );

  return (
    <section id="calculator" className="py-16 md:py-24" aria-labelledby="calc-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 id="calc-heading" className="mb-2 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
            SIP Calculator
          </h2>
          <p className="mb-10 text-center text-muted-foreground">
            Adjust the values below and see estimated results instantly.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Inputs */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
              <h3 className="mb-6 font-heading text-lg font-semibold text-foreground">Investment Inputs</h3>
              <InputField
                label="Monthly Investment"
                id="monthly-investment"
                value={values.monthlyInvestment}
                onChange={update("monthlyInvestment")}
                min={500}
                max={500000}
                step={500}
                unit="INR/mo"
                helperText="Amount you invest every month"
                tooltip="This is the fixed amount you plan to invest every month through SIP. Start with what you can afford consistently."
              />
              <InputField
                label="Expected Annual Return"
                id="annual-return"
                value={values.annualReturn}
                onChange={update("annualReturn")}
                min={1}
                max={30}
                step={0.5}
                unit="%"
                helperText="Assumed annual return rate"
                tooltip="This is an assumed return rate for illustration purposes only. Actual market returns may vary significantly and past performance doesn't guarantee future results."
              />
              <InputField
                label="Investment Duration"
                id="investment-duration"
                value={values.years}
                onChange={update("years")}
                min={1}
                max={40}
                step={1}
                unit="Years"
                helperText="How long you plan to invest"
                tooltip="The time period you plan to stay invested. Longer durations typically help smooth out market volatility and benefit from compounding."
              />
            </div>

            {/* Results */}
            <div className="flex flex-col gap-4">
              <div className="rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
                <h3 className="mb-6 font-heading text-lg font-semibold text-foreground">Estimated Results</h3>
                <div className="grid gap-4">
                  <ResultCard label="Total Invested" value={`₹${formatCurrency(results.totalInvested)}`} variant="muted" />
                  <ResultCard label="Estimated Future Value" value={`₹${formatCurrency(results.futureValue)}`} variant="primary" />
                  <ResultCard label="Wealth Gained" value={`₹${formatCurrency(results.wealthGained)}`} variant="success" />
                </div>
              </div>
              {/* Keyboard hint */}
              <div className="rounded-lg bg-secondary px-4 py-3 text-center text-xs text-muted-foreground" role="note">
                <span aria-hidden="true">⌨</span> Use <kbd className="rounded bg-background px-1.5 py-0.5 font-mono text-xs shadow-soft">Tab</kbd> to navigate,{" "}
                <kbd className="rounded bg-background px-1.5 py-0.5 font-mono text-xs shadow-soft">Arrow keys</kbd> to adjust sliders.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
export { calculateSIP, type CalculatorValues, type CalculatorResults };
