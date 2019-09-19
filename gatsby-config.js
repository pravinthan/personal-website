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
        trackingId: "UA-148331663-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "pravinthan-personal-website",
        short_name: "pravinthan",
        start_url: "/",
        background_color: "#141821",
        icon: `static/icon-512x512.png`,
        theme_color: "#f6ad55",
        display: "standalone",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify",
    "gatsby-plugin-theme-ui"
  ],
}
