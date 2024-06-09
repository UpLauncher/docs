import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Rai Docs",
      logo: {
        src: "./src/assets/logo.png",
      },
      favicon: "./src/assets/logo.png",
      social: {
        "twitter": "https://twitter.com/raidesuuu",
        "github": "https://github.com/raidesuuu",
        "discord": "https://discord.com/raic.tech",
        "blueSky": "https://bsky.app/raic.tech",
        "youtube": "https://youtube.com/@_rai_ch",
        "x.com": "https://x.com/raidesuuu"
      },
      sidebar: [
        {
          label: "ようこそ",
          translations: {
            "en": "Welcome"
          },
          link: "/",
        },
        {
          label: "Rales",
          items: [
            {
              label: "開始する",
              translations: {
                "en": "Getting Started"
              },
              items: [
                {
                  label: "開始する",
                  link: "/rales/getting-started/getting-started",
                  translations: {
                    "en": "Getting Started"
                  },
                },
                {
                  label: "次のステップ",
                  link: "/rales/getting-started/next-step",
                  translations: {
                    "en": "Next Step"
                  },
                },
                {
                  label: "Ralesに移行する",
                  link: "/rales/getting-started/migration",
                  translations: {
                    "en": "Migration"
                  },
                },
              ],
            },
            {
              label: "サーバーの管理",
              translations: {
                "en": "Server Management"
              },
              items: [
                {
                  label: "詳細なセットアップ",
                  link: "/rales/advanced-setup",
                  translations: {
                    "en": "Advanced Setup"
                  },
                },
                {
                  label: "アップデート",
                  link: "/rales/updating",
                  translations: {
                    "en": "Updating"
                  },
                },
              ],
            },
          ],
        },
        {
          label: "AblityDyno",
          link: "https://ablitydyno.raic.tech"
        },
        {
          label: "Discord.jsk",
          items: [
            {
              label: "開始する",
              translations: {
                "en": "Getting Started"
              },
              link: "/jsk/getting-started"
            }
          ]
        }
      ],
      locales: {
        root: {
          label: "日本語",
          lang: "ja",
        },
        en: {
          label: "English",
          lang: "en"
        }
      },
    }),
  ],
});
