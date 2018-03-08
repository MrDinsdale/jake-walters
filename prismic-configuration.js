const PrismicConfiguration = {
    apiEndpoint: 'https://jake-walters.prismic.io/api/v2',

    // -- Access token if the Master is not open
    // accessToken: 'xxxxxx',
    // OAuth
    // clientId: 'xxxxxx',
    // clientSecret: 'xxxxxx',

    linkResolver(doc, ctx) {
      return '/';
    },
};

export default PrismicConfiguration
