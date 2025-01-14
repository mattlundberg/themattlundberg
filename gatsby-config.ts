import type { GatsbyConfig } from "gatsby"
import dotenv from "dotenv"

// Load environment variables
dotenv.config({
  path: `.env`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `The Matt Lundberg`,
    description: `Full-stack developer passionate about creating elegant solutions with modern web technologies. Specializing in React, TypeScript, and cloud architecture with a focus on building scalable, user-centric applications.`,
    author: `@mattlundberg`,
    siteUrl: `https://themattlundberg.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
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
        short_name: `ML`,
        start_url: `/`,
        background_color: `#0a0a0f`,
        theme_color: `#64ffda`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}

export default config 