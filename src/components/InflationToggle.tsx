import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface InflationToggleProps {
    includeInflation: boolean;
    onToggle: (value: boolean) => void;
    inflationRate: number;
}

const InflationToggle = ({ includeInflation, onToggle, inflationRate }: InflationToggleProps) => {
    return (
        <div className="flex items-center justify-between rounded-lg border border-border bg-secondary/50 p-4">
            <div className="flex items-center gap-2">
                <Label htmlFor="inflation-toggle" className="cursor-pointer font-heading text-sm font-semibold">
                    Include Inflation Impact
                </Label>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                            <p className="text-xs">
                                Inflation reduces purchasing power over time. At {inflationRate}% annual inflation,
                                ₹1,00,000 today will have less buying power in the future.
                            </p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <Switch id="inflation-toggle" checked={includeInflation} onCheckedChange={onToggle} />
        </div>
    );
};

export default InflationToggle;
