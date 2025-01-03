import type { GatsbyConfig, PluginRef } from "gatsby";
import "dotenv/config";

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: "Pravinthan Prabagaran",
    siteTitleAlt: "Pravinthan Prabagaran",
    siteLanguage: "en",
    siteHeadline: "A collection of my projects.",
    siteDescription: "A collection of my projects.",
    siteImage: "/favicon.png",
    siteUrl: "https://pravinthan.com/",
    social: [
      {
        name: "github",
        url: "https://github.com/pravinthan",
      },
    ],
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
  ].filter(Boolean) as Array<PluginRef>,
};

export default config;
