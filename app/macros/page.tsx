import { Metadata } from "next";
import MacrosCalculator from "./macros-calculator";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
    title: "Calculateur de Macros",
    description: "Calculez vos besoins en Protéines, Lipides et Glucides selon votre objectif.",
    path: "/macros",
});

export default function MacrosPage() {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Calculateur de Macros</h1>
                <p className="text-muted-foreground">Calculez vos besoins en Protéines, Lipides et Glucides selon votre objectif.</p>
            </div>

            <MacrosCalculator />
        </div>
    );
}
