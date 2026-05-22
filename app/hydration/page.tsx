import { Metadata } from "next";
import HydratationCalculator from "./hydratation-calculator";
import { createMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = createMetadata({
    title: "Calculateur d'Hydratation",
    description:
        "Calculez vos besoins quotidiens en eau selon votre poids et niveau d'activité. Restez hydraté et optimisez vos performances sportives grâce à ce calculateur.",
    path: "/hydration",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fit-tracker-mauve.vercel.app";

export default function HydrationPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Calculateur d'Hydratation – Fit Tracker",
        url: `${baseUrl}/hydration`,
        description: "Calculez vos besoins quotidiens en eau selon votre poids et niveau d'activité.",
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
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Calculateur de Besoins en Eau</h1>
                    <p className="text-muted-foreground">
                        Calculez vos besoins quotidiens en eau selon votre poids et niveau d&apos;activité. Restez hydraté et optimisez vos
                        performances sportives.
                    </p>
                </div>
                <HydratationCalculator />
            </div>
        </>
    );
}
