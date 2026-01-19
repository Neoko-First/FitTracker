import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/toggle-mode";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const title = process.env.NEXT_PUBLIC_APP_NAME || "Fit Tracker";
const description =
    process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
    "Calculez vos calories, macros, IMC, besoins énergétiques, pas, allure et hydratation avec Fit Tracker, une application claire et fiable pour mieux comprendre et suivre vos objectifs forme.";
const url = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const indexable = process.env.NEXT_PUBLIC_WEB_INDEX === "true";

export const metadata: Metadata = {
    // URL de base utilisée pour générer les URLs relatives dans les balises meta (ex : canonical)
    metadataBase: new URL(url),

    // Titre par défaut et template de titre pour les pages
    // Exemple : "Page Contact - Pierres d'Histoire"
    title: {
        default: title,
        template: `%s - ${title}`,
    },

    // Description générique du site, utilisée dans <meta name="description">
    description: description,

    // Nom de l'application, utilisé dans le manifest ou pour l'Apple Web App
    applicationName: title,

    // Canonical URL
    alternates: {
        canonical: url,
    },
    
    // Google search console
    other: {
        "google-site-verification": "0isr83HVlUdVblRq7sQGMMyidAD7o_Uyh5shhwM6BEI",
    },

    // Liste des auteurs du site — utile pour créditer une agence ou une équipe
    authors: [
        {
            url: "https://www.alexandre-artisien.fr",
            name: "Alexandre Artisien",
        },
    ],

    // Nom du framework ou moteur utilisé pour générer le site (info purement informative)
    generator: "Next.js",

    // Créateur du **contenu intellectuel** (par défaut), utilisé par certains moteurs pour afficher la provenance
    creator: "Alexandre Artisien",

    // Éditeur du site au sens de "celui qui publie le contenu" (devrait plutôt être "Pierres d'Histoire")
    publisher: "Alexandre Artisien",

    // Configuration PWA pour Safari iOS : active le mode "web app plein écran"
    appleWebApp: {
        capable: true,
        title: title,
        statusBarStyle: "default",
    },

    // Icônes utilisées pour les applications web
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-icon.png",
    },

    // Données OpenGraph pour les réseaux sociaux (ex : Facebook, LinkedIn)
    openGraph: {
        // Titre OG par défaut + template
        title: {
            default: title,
            template: `%s`,
        },
        // Description affichée lors d’un partage sur réseaux sociaux
        description: description,
        // URL canonique du site
        url: url,
        // Langues alternatives
        alternateLocale: ["fr"],
        // Nom du site
        siteName: title,
        // Type de contenu : "website", "article", "product", etc.
        type: "website",
        // Image par défaut pour les partages sociaux
        images: "/banner.png",
    },

    // Balises Twitter Card
    twitter: {
        title: {
            default: title,
            template: `%s`,
        },
        description: description,
        card: "summary_large_image", // grand visuel dans l’aperçu Twitter
        images: "/banner.png", // image utilisée pour la carte
    },

    // Instructions pour les robots d’indexation (SEO)
    robots: {
        index: indexable, // true = autorise l’indexation
        follow: indexable, // true = autorise le crawl des liens
        googleBot: {
            index: indexable,
            follow: indexable,
            "max-video-preview": -1, // -1 = pas de limite
            "max-image-preview": "large", // autorise un aperçu large des images
            "max-snippet": -1, // pas de limite de longueur pour les extraits
        },
    },
};

export const viewport: Viewport = {
    themeColor: "#34D399",
    colorScheme: "light dark",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Analytics />
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <SidebarProvider>
                        <AppSidebar />
                        <main className="w-full flex flex-col">
                            <div className="w-full flex justify-between items-center sticky top-0 backdrop-blur-xs p-4">
                                <SidebarTrigger />
                                <ModeToggle />
                            </div>
                            <div className="p-4">{children}</div>
                            <Toaster richColors />
                        </main>
                    </SidebarProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
