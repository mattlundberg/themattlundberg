import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `The Matt Lundberg`,
    description: `Full-stack developer passionate about creating elegant solutions with modern web technologies. Specializing in React, TypeScript, and cloud architecture with a focus on building scalable, user-centric applications.`,
    author: `@mattlundberg`,
    siteUrl: `https://themattlundberg.com`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}

export default config 