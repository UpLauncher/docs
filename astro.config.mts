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
              items: [
                {
                  label: "開始する",
                  link: "/rales/getting-started/getting-started",
                },
                {
                  label: "次のステップ",
                  link: "/rales/getting-started/next-step",
                },
                {
                  label: "Ralesに移行する",
                  link: "/rales/getting-started/migration",
                },
              ],
            },
            {
              label: "サーバーの管理",
              items: [
                {
                  label: "詳細なセットアップ",
                  link: "/rales/advanced-setup",
                },
                {
                  label: "アップデート",
                  link: "/rales/updating",
                },
              ],
            },
          ],
        },
        {
          label: "AblityDyno",
          link: "https://ablitydyno.raic.tech"
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
