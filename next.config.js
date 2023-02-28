module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });

    return config;
  },

  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
};
