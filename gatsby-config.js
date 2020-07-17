require("dotenv").config({
  path: ".env"
});

module.exports = {
  siteMetadata: {
    siteTitle: "Pravinthan Prabagaran",
    siteTitleAlt: "Pravinthan Prabagaran",
    author: "Pravinthan Prabagaran",
    siteHeadline: "A collection of my projects.",
    siteDescription: "A collection of my projects.",
    siteImage: "/favicon.png",
    siteUrl: "https://pravinthan.com/",
    social: [
      {
        name: "github",
        url: "https://github.com/pravinthan"
      }
    ]
  },
  plugins: [
    {
      resolve: "@lekoarts/gatsby-theme-cara",
      options: {}
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-148331663-1"
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Pravinthan's Portfolio",
        short_name: "Pravinthan",
        start_url: "/",
        background_color: "#141821",
        icon: `static/favicon.png`,
        theme_color: "#f6ad55",
        display: "standalone"
      }
    },
    `gatsby-plugin-emotion`,
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify",
    "gatsby-plugin-theme-ui"
  ]
};
