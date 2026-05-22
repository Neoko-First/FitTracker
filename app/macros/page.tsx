import { Metadata } from "next";
import MacrosCalculator from "./macros-calculator";
import { createMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = createMetadata({
    title: "Calculateur de Macros",
    description:
        "Calculez vos macronutriments (protéines, lipides, glucides) selon votre objectif sportif. Presets prise de masse, sèche, endurance et cétogène disponibles.",
    path: "/macros",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fit-tracker-mauve.vercel.app";

export default function MacrosPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Calculateur de Macros – Fit Tracker",
        url: `${baseUrl}/macros`,
        description: "Calculez vos macronutriments (protéines, lipides, glucides) selon votre objectif sportif.",
        applicationCategory: "HealthApplication",
        operatingSystem: "Any",
        inLanguage: "fr-FR",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    };

    return (
        <>
            <JsonLd data={jsonLd} />
            <div className="w-full max-w-4xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Calculateur de Macros</h1>
                    <p className="text-muted-foreground">
                        Calculez vos macronutriments (protéines, lipides, glucides) selon votre objectif sportif. Presets prise de masse, sèche,
                        endurance et cétogène disponibles.
                    </p>
                </div>
                <MacrosCalculator />
            </div>
        </>
    );
}
