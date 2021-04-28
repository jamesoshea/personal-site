module.exports = {
  siteMetadata: {
    title: `Latest Jim Trends`,
    name: `James O'Shea`,
    siteUrl: `https://latestjimtrends.online/`,
    description: `Your one-stop shop to stay on top of the latest trends in Jim-adjacent industries. Jim equipment, other, and of course, miscellaneous. Your fingers are on the pulse of life.`,
    hero: {
      heading: `Your one-stop shop to stay on top of the latest trends in Jim-adjacent industries. Jim equipment, other, and of course, miscellaneous. Your fingers are on the pulse of life. `,
      maxWidth: "100vw",
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
