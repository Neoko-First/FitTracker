import { createMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Metadata } from "next";
import StepCalculator from "./calculator";

export const metadata: Metadata = createMetadata({
    title: "Calculateur de Pas",
    description:
        "Calculez votre nombre de pas quotidien, la distance parcourue et les calories brûlées. Paramétrable selon votre taille et votre longueur de foulée personnalisée.",
    path: "/steps",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fit-tracker-mauve.vercel.app";

export default function StepsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Calculateur de Pas – Fit Tracker",
        url: `${baseUrl}/steps`,
        description: "Calculez votre nombre de pas quotidien, la distance parcourue et les calories brûlées.",
        applicationCategory: "HealthApplication",
        operatingSystem: "Any",
        inLanguage: "fr-FR",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    };

    return (
        <>
            <JsonLd data={jsonLd} />
            <div className="w-full max-w-3xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Calculateur de Pas et Distance</h1>
                    <p className="text-muted-foreground">
                        Calculez votre nombre de pas quotidien, la distance parcourue et les calories brûlées. Paramétrable selon votre taille et
                        longueur de foulée.
                    </p>
                </div>
                <StepCalculator />
            </div>
        </>
    );
}
