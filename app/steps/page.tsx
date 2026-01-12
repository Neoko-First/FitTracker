import { createMetadata } from "@/lib/seo";
import { Metadata } from "next";
import StepCalculator from "./calculator";

export const metadata: Metadata = createMetadata({
    title: "Calculateur de Pas",
    description: "Estimez vos pas ou votre distance parcourue.",
    path: "/steps",
});

export default function StepsPage() {
    return (
        <div className="w-full max-w-3xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Calculateur de Pas</h1>
                <p className="text-muted-foreground">Estimez vos pas ou votre distance parcourue.</p>
            </div>
            <StepCalculator />
        </div>
    );
}
