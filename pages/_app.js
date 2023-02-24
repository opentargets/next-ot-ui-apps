import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import client from "../client";

function OTWrapper(props) {
  const { Component, pageProps } = props;

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default OTWrapper;
