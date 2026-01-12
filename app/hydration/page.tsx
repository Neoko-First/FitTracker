import { Metadata } from "next";
import HydratationCalculator from "./hydratation-calculator";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
    title: "Hydratation",
    description: "Estimez vos besoins quotidiens en eau.",
    path: "/hydration",
});

export default function HydrationPage() {
    return (
        <div className="w-full max-w-3xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Hydratation</h1>
                <p className="text-muted-foreground">Estimez vos besoins quotidiens en eau.</p>
            </div>

            <HydratationCalculator />
        </div>
    );
}
