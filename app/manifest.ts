import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    const title = "Fit Tracker";
    const short_name = "Fit Tracker";
    const description =
        "Calculez vos calories, macros, IMC, besoins énergétiques, pas, allure et hydratation avec Fit Tracker, une application claire et fiable pour mieux comprendre et suivre vos objectifs forme.";

    return {
        name: title,
        short_name: short_name,
        description: description,
        theme_color: "#34D399",
        background_color: "#0f172a",
        display: "standalone",
        orientation: "natural",
        scope: "/",
        start_url: "/",
        icons: [
            {
                src: "/web-app-manifest-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "any",
            },
            {
                src: "/web-app-manifest-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable",
            },
        ],
        screenshots: [
            {
                form_factor: "wide",
                label: "Maintien Calorique (TDEE)",
                src: "screenshot_desktop_1.webp",
                sizes: "3512x1648",
                type: "image/webp",
            },
            {
                form_factor: "wide",
                label: "Calculateur de Pas",
                src: "screenshot_desktop_2.webp",
                sizes: "3512x1648",
                type: "image/webp",
            },
            {
                form_factor: "wide",
                label: "Calculateur de Macros",
                src: "screenshot_desktop_3.webp",
                sizes: "3512x1648",
                type: "image/webp",
            },
            {
                form_factor: "narrow",
                label: "Maintien Calorique (TDEE)",
                src: "screenshot_phone_1.webp",
                sizes: "800x1648",
                type: "image/webp",
            },
            {
                form_factor: "narrow",
                label: "Calculateur de Macros",
                src: "screenshot_phone_2.webp",
                sizes: "800x1648",
                type: "image/webp",
            },
            {
                form_factor: "narrow",
                label: "Calculateur de Pas",
                src: "screenshot_phone_3.webp",
                sizes: "800x1648",
                type: "image/webp",
            },
        ],
        id: title,
        categories: ["utilities"],
        dir: "ltr",
        lang: "fr",
        display_override: ["standalone", "minimal-ui", "fullscreen", "window-controls-overlay", "browser"],
        launch_handler: {
            client_mode: "navigate-new",
        },
        shortcuts: [
            {
                name: "Accueil",
                url: "/",
            },
            {
                name: "Steps",
                url: "/steps",
            },
            {
                name: "Calories",
                url: "/calories",
            },
            {
                name: "Profil",
                url: "/profile",
            },
        ],
    };
}
