import { useMemo } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { type CalculatorValues } from "./CalculatorSection";

const generateChartData = (values: CalculatorValues) => {
  const { monthlyInvestment, annualReturn, years } = values;
  const monthlyRate = annualReturn / 100 / 12;
  const data = [];

  for (let y = 0; y <= years; y++) {
    const months = y * 12;
    const invested = monthlyInvestment * months;
    let future = 0;
    if (monthlyRate > 0 && months > 0) {
      future = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    } else {
      future = invested;
    }
    data.push({
      year: `Year ${y}`,
      invested: Math.round(invested),
      futureValue: Math.round(future),
    });
  }
  return data;
};

const formatAxis = (v: number) => {
  if (v >= 10000000) return `${(v / 10000000).toFixed(1)}Cr`;
  if (v >= 100000) return `${(v / 100000).toFixed(0)}L`;
  if (v >= 1000) return `${(v / 1000).toFixed(0)}K`;
  return `${v}`;
};

const ChartSection = ({ values }: { values: CalculatorValues }) => {
  const data = useMemo(() => generateChartData(values), [values]);

  return (
    <section className="bg-surface py-16 md:py-24" aria-labelledby="chart-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 id="chart-heading" className="mb-2 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
            Investment Growth Projection
          </h2>
          <p className="mb-10 text-center text-muted-foreground">
            Visualize how your investment may grow over time.
          </p>
          <div className="rounded-xl border border-border bg-card p-4 shadow-card md:p-8">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="gradInvested" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(214, 60%, 33%)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(214, 60%, 33%)" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="gradReturns" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(152, 55%, 42%)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(152, 55%, 42%)" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 20%, 90%)" />
                <XAxis dataKey="year" tick={{ fontSize: 12, fill: "hsl(0, 0%, 57%)" }} />
                <YAxis tickFormatter={formatAxis} tick={{ fontSize: 12, fill: "hsl(0, 0%, 57%)" }} />
                <Tooltip
                  formatter={(value: number, name: string) => [
                    `₹${new Intl.NumberFormat("en-IN").format(value)}`,
                    name === "invested" ? "Total Invested" : "Future Value",
                  ]}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid hsl(210, 20%, 90%)",
                    boxShadow: "0 4px 24px -4px rgba(34,76,135,0.1)",
                    fontFamily: "var(--font-body)",
                  }}
                />
                <Legend
                  formatter={(value) => (value === "invested" ? "Total Invested" : "Estimated Future Value")}
                  wrapperStyle={{ fontFamily: "var(--font-heading)", fontSize: "13px" }}
                />
                <Area
                  type="monotone"
                  dataKey="invested"
                  stroke="hsl(214, 60%, 33%)"
                  strokeWidth={2}
                  fill="url(#gradInvested)"
                  animationDuration={800}
                />
                <Area
                  type="monotone"
                  dataKey="futureValue"
                  stroke="hsl(152, 55%, 42%)"
                  strokeWidth={2}
                  fill="url(#gradReturns)"
                  animationDuration={1000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartSection;
