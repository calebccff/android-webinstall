export default {
    OS_NAME: process.env.VUE_APP_OS_NAME,
    ACCENT_COLOR: "#0366d6",
    SUPPORTED_DEVICES: [
        {
            name: "OnePlus 6",
            model: "sdm845", // What the actual...
        },
        {
            name: "OnePlus 6T",
            model: "fajita",
        },
        {
            name: "SHIFT6mq",
            model: "axolotl",
        },
    ],
    RELEASE_VARIANTS: {
        phosh: {
            description: "Phosh user interface",
            suffix: " with Phosh",
        },
        gnome_mobile: {
            description:
                "Gnome Mobile user interface.",
            suffix: " with Gnome Mobile",
        },
    },
    DONATION_LINKS: [
    ],
};
