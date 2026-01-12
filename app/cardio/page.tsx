import { createMetadata } from "@/lib/seo";
import { Metadata } from "next";
import CardioCalculator from "./cardio-calculator";

export const metadata: Metadata = createMetadata({
    title: "Zones Cardio",
    description: "Calculez vos zones d&apos;intensité cardiaque pour optimiser votre entraînement.",
    path: "/cardio",
});

export default function CardioPage() {
    return (
        <div className="w-full max-w-3xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Zones Cardio</h1>
                <p className="text-muted-foreground">Calculez vos zones d&apos;intensité cardiaque pour optimiser votre entraînement.</p>
            </div>

            <CardioCalculator />
        </div>
    );
}
