import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import type { AppProps } from "next/app";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize("G-87XFY2X9NB");

    // Function to track page views
    const trackPageViews = (url: string) => {
      ReactGA.send({ hitType: "pageview", page: url });
    };

    // Track the initial pageview
    trackPageViews(router.asPath);

    // Add the event listener for tracking subsequent pageviews
    router.events.on("routeChangeComplete", trackPageViews);

    // Remove the event listener when the component unmounts
    return () => {
      router.events.off("routeChangeComplete", trackPageViews);
    };
  }, [router.events, router.asPath]);

  return (
    <Provider store={store}>
      <Head>
        <title>Kenan Garayev</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
