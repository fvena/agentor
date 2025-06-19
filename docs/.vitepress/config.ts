import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/agentor/",
  description:
    "Agentor is an intelligent assistant powered by AI agents that act as your Product Owner, Architect, and Technical Writer—all in one. It guides you through every stage of software development, from idea to maintenance.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { link: "/", text: "Home" },
      { link: "/markdown-examples", text: "Examples" },
    ],

    sidebar: [
      {
        items: [
          { link: "/markdown-examples", text: "Markdown Examples" },
          { link: "/api-examples", text: "Runtime API Examples" },
        ],
        text: "Examples",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
  title: "Agentor",
});
