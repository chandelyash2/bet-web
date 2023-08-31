import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/client/apollo";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps as any);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
