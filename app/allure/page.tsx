import { createMetadata } from "@/lib/seo";
import { Metadata } from "next";
import AllureCalculator from "./allure-calculator";

export const metadata: Metadata = createMetadata({
    title: "Convertisseur Allure",
    description: "Calculez votre temps, distance ou allure en fonction de vos objectifs.",
    path: "/allure",
});

export default function AllurePage() {
    return (
        <div className="w-full max-w-3xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Convertisseur Allure</h1>
                <p className="text-muted-foreground">Calculez votre temps, distance ou allure en fonction de vos objectifs.</p>
            </div>

            <AllureCalculator />
        </div>
    );
}
