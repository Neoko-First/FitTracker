import { createMetadata } from "@/lib/seo";
import CaloriesCalculator from "./calories-calculator";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
    title: "Calculateur de Calories",
    description: "Estimation de vos besoins énergétiques quotidiens selon la formule Mifflin-St Jeor.",
    path: "/calories",
});

export default function CaloriesPage() {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Maintien Calorique (TDEE)</h1>
                <p className="text-muted-foreground">Estimation de vos besoins énergétiques quotidiens selon la formule Mifflin-St Jeor.</p>
            </div>
            <CaloriesCalculator />
        </div>
    );
}
