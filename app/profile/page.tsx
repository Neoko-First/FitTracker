import { Metadata } from "next";
import ProfileForm from "./form";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
    title: "Profil",
    description: "Gestion de votre profil utilisateur.",
    path: "/profile",
});

export default function ProfilePage() {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Vos informations :</h1>
            <ProfileForm />
        </div>
    );
}
