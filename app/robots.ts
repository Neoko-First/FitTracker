import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fit-tracker-mauve.vercel.app";
const indexable = process.env.NEXT_PUBLIC_WEB_INDEX === "true";

export default function robots(): MetadataRoute.Robots {
    const disallowPaths = ["/*.pdf$", "/*.svg$", "/*.webp$", "/*.png$", "/*.jpg$", "/*.jpeg$", "/*.css$"];

    return {
        rules: [
            {
                userAgent: "*",
                allow: indexable ? "/" : "", // index ou non
                disallow: indexable ? disallowPaths : ["/"], // disallow spécifique ou full
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}
