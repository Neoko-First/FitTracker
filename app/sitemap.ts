import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticsUrls = ["/allure", "/bmi", "/calories", "/cardio", "/hydration", "/macros", "/profile", "/steps"];

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fit-tracker-mauve.vercel.app";

    // initialisation du sitemap avec les urls statiques
    const sitemap: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
        },
    ];

    // ajouts des urls statics

    staticsUrls.forEach((staticUrl) => {
        sitemap.push({
            url: `${baseUrl}${staticUrl}`,
        });
    });

    return sitemap;
}
