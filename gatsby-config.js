require("dotenv").config({
  path: ".env",
})

module.exports = {
  siteMetadata: {
    siteTitle: "Pravinthan's Portfolio",
    siteTitleAlt: "Pravinthan's Portfolio",
    author: "Pravinthan Prabagaran",
    siteDescription: "A collection of my projects.",
    siteUrl: "https://pravinthan.com/",
    social: [
      {
        name: "github",
        url: "https://github.com/pravinthan",
      },
    ]
  },
  plugins: [
    {
      resolve: "@lekoarts/gatsby-theme-cara",
      options: {},
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Cara - @lekoarts/gatsby-theme-cara",
        short_name: "Cara",
        description: "Playful and Colorful One-Page portfolio featuring Parallax effects and animations",
        start_url: "/",
        background_color: "#141821",
        theme_color: "#f6ad55",
        display: "standalone",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify",
    "gatsby-plugin-theme-ui"
  ],
}
