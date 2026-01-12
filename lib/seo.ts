import type { Metadata } from "next";

interface GenerateMetadataParams {
    title: string;
    description?: string;
    path: string; // "/concept", "/a-propos", etc.
    robots?: boolean;
    image?: string;
}

const siteName = process.env.NEXT_PUBLIC_APP_NAME || "Fit Tracker";
const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const siteDescription = process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Tracker vos forme est un jeu d'enfant";

export function createMetadata({ title, description, path, robots = false, image }: GenerateMetadataParams): Metadata {
    const allowRobots = robots && process.env.NEXT_PUBLIC_WEB_INDEX === "true" ? true : false;

    const ogImagePath = image ?? `/api/og?title=${encodeURIComponent(title)}`;

    return {
        metadataBase: new URL(siteUrl),
        title,
        description: description || siteDescription,

        alternates: {
            canonical: path, // => https://rayonnage-express.com + path
        },

        openGraph: {
            title,
            description: description || siteDescription,
            url: path,
            images: ["/banner.png"],
            siteName: siteName,
            type: "website",
            locale: "fr_FR",
        },

        twitter: {
            title,
            description: description || siteDescription,
            card: "summary_large_image",
            images: ["/banner.png"],
        },

        robots: {
            index: allowRobots,
            follow: allowRobots,
            googleBot: {
                index: allowRobots,
                follow: allowRobots,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
}
