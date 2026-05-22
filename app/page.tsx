import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/json-ld";
import { Apple, CircleGauge, Flame, Footprints, GlassWater, HeartPulse, SquareActivity } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: {
        absolute: "Fit Tracker — Calculateurs de Fitness & Nutrition Gratuits",
    },
    description:
        "Calculateurs gratuits de calories (TDEE), macronutriments, IMC, pas, hydratation, allure et zones cardio. Suivez vos objectifs forme sans inscription.",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Fit Tracker — Calculateurs de Fitness & Nutrition Gratuits",
        description:
            "Calculateurs gratuits de calories (TDEE), macronutriments, IMC, pas, hydratation, allure et zones cardio. Suivez vos objectifs forme sans inscription.",
        url: "/",
    },
};

const apps = [
    {
        title: "Steps",
        description: "Estimez votre nombre de pas en fonction de la distance parcourue.",
        url: "/steps",
        icon: Footprints,
        disabled: false,
    },
    {
        title: "Calories",
        description: "Estimation de vos besoins énergétiques quotidiens selon la formule Mifflin-St Jeor.",
        url: "/calories",
        icon: Flame,
        disabled: false,
    },
    {
        title: "BMI",
        description: "Indice de Masse Corporelle selon la classification de l'OMS.",
        url: "/bmi",
        icon: SquareActivity,
        disabled: false,
    },
    {
        title: "Macros",
        description: "Calculez vos besoins en Protéines, Lipides et Glucides selon votre objectif.",
        url: "/macros",
        icon: Apple,
        disabled: false,
    },
    {
        title: "Hydratation",
        description: "Estimez vos besoins quotidiens en eau.",
        url: "/hydration",
        icon: GlassWater,
        disabled: false,
    },
    {
        title: "Allure",
        description: "Calculez votre allure optimale pour atteindre votre objectif.",
        url: "/allure",
        icon: CircleGauge,
        disabled: false,
    },
    {
        title: "Cardio",
        description: "Calculez vos zones d'intensité cardiaque pour optimiser votre entraînement.",
        url: "/cardio",
        icon: HeartPulse,
        disabled: false,
    },
];

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fit-tracker-mauve.vercel.app";

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Fit Tracker",
        url: baseUrl,
        description:
            "Calculateurs de fitness et nutrition gratuits : calories (TDEE), macronutriments, IMC, pas, hydratation, allure de course et zones cardio.",
        inLanguage: "fr-FR",
    };

    return (
        <>
            <JsonLd data={jsonLd} />
            <div className="w-full p-7 space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Calculateurs de Fitness et Nutrition Gratuits</h1>
                    <p className="text-muted-foreground">
                        Calories, macros, IMC, pas, hydratation, allure et zones cardio — tous vos outils de suivi forme, gratuits et sans inscription.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
                    {apps.map((app, index) => (
                        <Link
                            key={index}
                            href={app.url}
                            className={cn("bg-secondary p-4 border rounded", app.disabled && "opacity-50 pointer-events-none")}
                        >
                            <div className="flex gap-2 items-center">
                                <app.icon className="text-neutral-400 dark:text-neutral-600 n-icon" />
                                <span className="truncat my-5px text-lg text-black dark:text-white">{app.title}</span>
                            </div>
                            {app.description && <div className="line-clamp-2 text-neutral-500 dark:text-neutral-400">{app.description}</div>}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
