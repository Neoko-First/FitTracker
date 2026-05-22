import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fit-tracker-mauve.vercel.app";
    const lastModified = new Date("2026-05-22");

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/calories`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/macros`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/bmi`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/steps`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/hydration`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/allure`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/cardio`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}
