import { createMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Metadata } from "next";
import AllureCalculator from "./allure-calculator";

export const metadata: Metadata = createMetadata({
    title: "Calculateur d'Allure de Course",
    description:
        "Calculez votre allure de course, votre temps de passage ou votre distance cible. Outil idéal pour préparer un 10 km, semi-marathon ou marathon.",
    path: "/allure",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fit-tracker-mauve.vercel.app";

export default function AllurePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Calculateur d'Allure de Course – Fit Tracker",
        url: `${baseUrl}/allure`,
        description: "Calculez votre allure de course, votre temps de passage ou votre distance cible.",
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
                    <h1 className="text-3xl font-bold tracking-tight">Calculateur d&apos;Allure de Course</h1>
                    <p className="text-muted-foreground">
                        Calculez votre allure de course, votre temps de passage ou votre distance cible. Outil idéal pour préparer un 10 km,
                        semi-marathon ou marathon.
                    </p>
                </div>
                <AllureCalculator />
            </div>
        </>
    );
}
