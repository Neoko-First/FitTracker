import { createMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Metadata } from "next";
import BMICalculator from "./bmi-calculator";

export const metadata: Metadata = createMetadata({
    title: "Calculateur IMC (BMI)",
    description:
        "Calculez votre IMC (Indice de Masse Corporelle) et interprétez votre résultat selon les classifications OMS : insuffisance pondérale, surpoids et obésité.",
    path: "/bmi",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fit-tracker-mauve.vercel.app";

export default function BMIPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Calculateur IMC – Fit Tracker",
        url: `${baseUrl}/bmi`,
        description: "Calculez votre IMC et interprétez votre résultat selon les classifications OMS.",
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
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Calculateur IMC (Indice de Masse Corporelle)</h1>
                    <p className="text-muted-foreground">
                        Calculez votre IMC et interprétez votre résultat selon les classifications OMS : insuffisance pondérale, surpoids et obésité.
                    </p>
                </div>
                <BMICalculator />
            </div>
        </>
    );
}
