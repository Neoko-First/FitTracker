import { createMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Metadata } from "next";
import CardioCalculator from "./cardio-calculator";

export const metadata: Metadata = createMetadata({
    title: "Calculateur de Zones Cardiaques",
    description:
        "Calculez vos zones de fréquence cardiaque (FCmax) pour optimiser vos séances. Brûlez plus de graisses, améliorez votre endurance et boostez votre VO2 max.",
    path: "/cardio",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fit-tracker-mauve.vercel.app";

export default function CardioPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Calculateur de Zones Cardiaques – Fit Tracker",
        url: `${baseUrl}/cardio`,
        description: "Calculez vos zones de fréquence cardiaque pour optimiser vos entraînements.",
        applicationCategory: "SportsApplication",
        operatingSystem: "Any",
        inLanguage: "fr-FR",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    };

    return (
        <>
            <JsonLd data={jsonLd} />
            <div className="w-full max-w-3xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">Calculateur de Zones de Fréquence Cardiaque</h1>
                    <p className="text-muted-foreground">
                        Calculez vos zones de fréquence cardiaque (FCmax) pour optimiser vos séances. Brûlez plus de graisses, améliorez votre
                        endurance et boostez votre VO2 max.
                    </p>
                </div>
                <CardioCalculator />
            </div>
        </>
    );
}
