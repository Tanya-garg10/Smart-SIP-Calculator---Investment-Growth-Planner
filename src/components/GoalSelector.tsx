import { motion } from "framer-motion";
import { Home, GraduationCap, Plane, Car } from "lucide-react";

export interface Goal {
    id: string;
    name: string;
    icon: typeof Home;
    targetAmount: number;
    color: string;
}

export const goals: Goal[] = [
    { id: "house", name: "Buy a House", icon: Home, targetAmount: 5000000, color: "text-blue-600" },
    { id: "education", name: "Education", icon: GraduationCap, targetAmount: 2000000, color: "text-purple-600" },
    { id: "travel", name: "Travel", icon: Plane, targetAmount: 500000, color: "text-green-600" },
    { id: "car", name: "Buy a Car", icon: Car, targetAmount: 1000000, color: "text-orange-600" },
];

interface GoalSelectorProps {
    selectedGoal: string | null;
    onSelectGoal: (goalId: string | null) => void;
}

const GoalSelector = ({ selectedGoal, onSelectGoal }: GoalSelectorProps) => {
    return (
        <div className="mb-6">
            <h3 className="mb-3 font-heading text-sm font-semibold text-foreground">Select Your Goal (Optional)</h3>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {goals.map((goal) => {
                    const Icon = goal.icon;
                    const isSelected = selectedGoal === goal.id;
                    return (
                        <motion.button
                            key={goal.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => onSelectGoal(isSelected ? null : goal.id)}
                            className={`rounded-lg border-2 p-3 text-center transition-all ${isSelected
                                    ? "border-primary bg-primary/10 shadow-md"
                                    : "border-border bg-card hover:border-primary/50"
                                }`}
                        >
                            <Icon className={`mx-auto mb-1 h-6 w-6 ${isSelected ? "text-primary" : goal.color}`} />
                            <p className="text-xs font-medium">{goal.name}</p>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
};

export default GoalSelector;
