import { useMemo } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { type CalculatorValues } from "./CalculatorSection";

const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(value);
};

const generateYearlyData = (values: CalculatorValues) => {
    const { monthlyInvestment, annualReturn, years } = values;
    const monthlyRate = annualReturn / 100 / 12;
    const data = [];

    for (let y = 1; y <= years; y++) {
        const months = y * 12;
        const invested = monthlyInvestment * months;
        let futureValue = 0;
        if (monthlyRate > 0) {
            futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
        } else {
            futureValue = invested;
        }
        const returns = futureValue - invested;
        data.push({
            year: y,
            invested: Math.round(invested),
            futureValue: Math.round(futureValue),
            returns: Math.round(returns),
        });
    }
    return data;
};

interface YearlyBreakdownTableProps {
    values: CalculatorValues;
}

const YearlyBreakdownTable = ({ values }: YearlyBreakdownTableProps) => {
    const data = useMemo(() => generateYearlyData(values), [values]);

    return (
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">Year-by-Year Breakdown</h3>
            <ScrollArea className="h-[400px] w-full">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[80px]">Year</TableHead>
                            <TableHead className="text-right">Invested</TableHead>
                            <TableHead className="text-right">Returns</TableHead>
                            <TableHead className="text-right">Total Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.year}>
                                <TableCell className="font-medium">{row.year}</TableCell>
                                <TableCell className="text-right">₹{formatCurrency(row.invested)}</TableCell>
                                <TableCell className="text-right text-success">₹{formatCurrency(row.returns)}</TableCell>
                                <TableCell className="text-right font-semibold">₹{formatCurrency(row.futureValue)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </ScrollArea>
        </div>
    );
};

export default YearlyBreakdownTable;
