import { Metadata } from "next";
import ProfileForm from "./form";
import { createMetadata } from "@/lib/seo";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = createMetadata({
    title: "Profil",
    description: "Gestion de votre profil utilisateur.",
    path: "/profile",
    robots: false,
});

export default function ProfilePage() {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Vos informations</h1>
                <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <ShieldCheck className="size-4 shrink-0 text-green-500" />
                    Vos données restent sur votre appareil — rien n&apos;est envoyé ni stocké sur un serveur.
                </p>
            </div>
            <ProfileForm />
        </div>
    );
}
