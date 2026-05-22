import { createMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import CaloriesCalculator from "./calories-calculator";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
    title: "Calculateur de Calories",
    description:
        "Calculez votre TDEE et vos besoins caloriques journaliers selon la formule Mifflin-St Jeor. Personnalisé selon votre poids, taille, âge et niveau d'activité physique.",
    path: "/calories",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fit-tracker-mauve.vercel.app";

export default function CaloriesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Calculateur de Calories – Fit Tracker",
        url: `${baseUrl}/calories`,
        description: "Calculez votre TDEE et vos besoins caloriques journaliers selon la formule Mifflin-St Jeor.",
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
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Calculateur de Calories Journalières (TDEE)</h1>
                    <p className="text-muted-foreground">
                        Calculez votre TDEE et vos besoins caloriques journaliers selon la formule Mifflin-St Jeor. Personnalisé selon votre poids,
                        taille, âge et niveau d&apos;activité physique.
                    </p>
                </div>
                <CaloriesCalculator />
            </div>
        </>
    );
}
