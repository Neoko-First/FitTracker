"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useUserStore } from "@/stores/user-store";
import { AlertTriangle, ArrowRight, Droplets, GlassWater, Info, Sun } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ACTIVITY_ADJUSTMENTS = {
    sedentary: 0,
    light: 250,
    moderate: 500,
    active: 750,
    very_active: 1000,
};

const ACTIVITY_LABELS = {
    sedentary: "Sédentaire",
    light: "Activité légère",
    moderate: "Modérément actif",
    active: "Très actif",
    very_active: "Extrêmement actif",
};

export default function HydrationPage() {
    const { weight, activityLevel } = useUserStore();
    const [isHotWeather, setIsHotWeather] = useState(false);

    // --- LOGIC ---
    let totalMl = 0;
    const baseMl = weight ? weight * 35 : 0;
    const activityAdjustment = activityLevel ? ACTIVITY_ADJUSTMENTS[activityLevel] : 0;
    const weatherAdjustment = isHotWeather ? 500 : 0;

    if (weight) {
        totalMl = baseMl + activityAdjustment + weatherAdjustment;
    }

    const totalLiters = totalMl / 1000;

    // Warnings
    let warning: string | null = null;
    if (totalLiters > 6) {
        warning = "Attention : Au-delà de 6L/jour, l'hyperhydratation peut être dangereuse (hyponatrémie).";
    }

    const missingData = !weight;

    return (
        <div className="w-full max-w-3xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Hydratation</h1>
                <p className="text-muted-foreground">Estimez vos besoins quotidiens en eau.</p>
            </div>

            {missingData ? (
                <Card className="border-destructive/50 bg-destructive/5">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-destructive">
                            <AlertTriangle className="size-5" />
                            Données manquantes
                        </CardTitle>
                        <CardDescription>Votre poids est nécessaire pour calculer vos besoins en eau.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button asChild>
                            <Link href="/profile">
                                Compléter mon profil <ArrowRight className="ml-2 size-4" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Main Calculation Card */}
                    <Card className="md:col-span-2 border-primary/20 bg-primary/5 shadow-md">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-primary">
                                <GlassWater className="size-5" />
                                Objectif Journalier
                            </CardTitle>
                            <CardDescription>Quantité recommandée (boissons + eau des aliments)</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center py-8">
                            <div className="text-6xl font-black tracking-tighter text-foreground mb-2">
                                {totalLiters.toFixed(2)} <span className="text-2xl font-medium text-muted-foreground">L</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/50 px-3 py-1 rounded-full border border-border/50">
                                {Math.round(totalMl)} ml au total
                            </div>
                        </CardContent>
                    </Card>

                    {/* Inputs & Details */}
                    <div className="space-y-6">
                        {/* Adjustments */}
                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-base">Ajustements</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {/* Weather Toggle */}
                                <div className="flex items-center justify-between space-x-2">
                                    <Label htmlFor="weather-mode" className="flex flex-col gap-1 cursor-pointer">
                                        <span className="font-medium flex items-center gap-2">
                                            <Sun className="size-4 text-orange-500" /> Météo Chaude
                                        </span>
                                        <span className="text-xs text-muted-foreground">Ajoute 500ml</span>
                                    </Label>
                                    <Switch id="weather-mode" checked={isHotWeather} onCheckedChange={setIsHotWeather} />
                                </div>

                                <Separator />

                                {/* Activity Info */}
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium flex items-center gap-2">
                                            <Droplets className="size-4 text-blue-500" /> Activité
                                        </span>
                                        <span className="text-xs font-mono bg-muted px-2 py-0.5 rounded">
                                            {activityLevel ? `+${activityAdjustment} ml` : "+0 ml"}
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        Basé sur votre niveau : <strong>{activityLevel ? ACTIVITY_LABELS[activityLevel] : "Non défini"}</strong>
                                    </p>
                                    {!activityLevel && (
                                        <Link href="/profile" className="text-xs text-primary underline">
                                            Définir mon niveau d&apos;activité
                                        </Link>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Base Info */}
                        <div className="text-sm text-muted-foreground space-y-2">
                            <div className="flex justify-between">
                                <span>Base ({weight}kg x 35ml)</span>
                                <span>{Math.round(baseMl)} ml</span>
                            </div>
                            {warning && (
                                <Alert variant="destructive" className="mt-4">
                                    <AlertTriangle className="size-4" />
                                    <AlertTitle>Attention</AlertTitle>
                                    <AlertDescription>{warning}</AlertDescription>
                                </Alert>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Guidelines / Disclaimer */}
            <div className="rounded-xl bg-card border text-card-foreground p-6">
                <h3 className="font-semibold flex items-center gap-2 mb-4">
                    <Info className="size-4" /> À propos de l&apos;hydratation
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <p>
                        Une bonne hydratation est essentielle pour la performance physique et cognitive. Ce calcul inclut l&apos;eau contenue dans vos
                        aliments (environ 20% de l&apos;apport total) et vos boissons (thé, café, eau).
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Buvez davantage si vous transpirez beaucoup.</li>
                        <li>La couleur de vos urines (jaune pâle) est le meilleur indicateur.</li>
                        <li>L&apos;eau reste la meilleure boisson.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
