import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: "https://api.platform.dev.opentargets.xyz/api/v4/graphql",
  uri: "https://api.platform.opentargets.org/api/v4/graphql",
  cache: new InMemoryCache({ EntityUnionType: ["Drug"] }),
  headers: { "OT-Platform": true },
});

export default client;
