/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `The Matt Lundberg`,
    description: `Full-stack developer specializing in AI-driven solutions and modern web technologies. Expert in integrating AI/ML capabilities, building intelligent applications, and developing custom AI tools to solve complex business challenges. Focused on creating scalable, AI-enhanced experiences using React, TypeScript, and cloud architecture.`,
    author: `@mattlundberg`,
    siteUrl: `https://themattlundberg.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
        failOnError: false,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Matt Lundberg`,
        short_name: `Matt Lundberg`,
        start_url: `/`,
        background_color: `#1a1a1a`,
        theme_color: `#b0e0e6`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
  ],
}
