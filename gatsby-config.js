module.exports = {
  siteMetadata: {
    title: `Latest Jim Trends`,
    name: `James O'Shea`,
    siteUrl: `https://latestjimtrends.online/`,
    description: `This is the place to keep abreast of the latest trends in Jim-adjacent industries. Jim equipment, Slim Jims, Jimbalaya and variaous Jim-related paraphenalia.`,
    hero: {
      heading: `The best opinions in the world`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/jamesoshea`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
  ],
};
