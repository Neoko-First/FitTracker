import { createMetadata } from "@/lib/seo";
import { Metadata } from "next";
import BMICalculator from "./bmi-calculator";

export const metadata: Metadata = createMetadata({
    title: "Calculateur IMC (BMI)",
    description: "Indice de Masse Corporelle selon la classification de l&apos;OMS.",
    path: "/bmi",
});

export default function BMIPage() {
    return (
        <div className="w-full max-w-3xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Calculateur IMC (BMI)</h1>
                <p className="text-muted-foreground">Indice de Masse Corporelle selon la classification de l&apos;OMS.</p>
            </div>

            <BMICalculator />
        </div>
    );
}
