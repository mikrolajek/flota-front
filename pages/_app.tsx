import { AppContext, AppProps } from "next/app";
import App from "next/app";
import "antd/dist/antd.css";
import "../styles/global.css";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "../lib/apolloClient"; // useApollo, // initializeApollo,
// import jwt from "jsonwebtoken";
import Cookies from "cookies";
import React from "react";

import { StateProvider } from "../lib/Context";
import { Provider } from "react-redux";
import store from "../lib/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { HeadWithImages } from "@COMPONENTS/HeadWithImages";

// import { createContext, useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { token } = pageProps;
  const apolloClient = createApolloClient(token);
  let persistor = persistStore(store);

  return (
    <StateProvider store={pageProps}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApolloProvider client={apolloClient}>
            <HeadWithImages />
            <Component {...pageProps} />
          </ApolloProvider>
        </PersistGate>
      </Provider>
    </StateProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { req, res, asPath } = appContext.ctx;

  const ISSERVER = typeof window === "undefined";
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  // console.log(appProps, "APP PROPS");
  // console.log(appContext, "APP CONTEXT");

  if (ISSERVER) {
    //@ts-ignore
    const cookies = new Cookies(req, res);
    // const secret = process.env.JWTSECRET || "";

    const cookieToken = cookies.get("token") as string;
    // console.log("Bearer ", cookieToken);

    if (!(asPath == "/login")) {
      if (asPath == "/") {
        res?.writeHead(301, {
          Location: "/login",
        });
        res?.end();
        return { ...appProps };
      }

      if (!cookieToken) {
        res?.writeHead(301, {
          Location: "/login",
        });
        res?.end();
        return { ...appProps };
      }
    }

    return {
      pageProps: {
        ...appProps.pageProps,
        token: cookieToken,
      },
    };
  }

  return {
    pageProps: {
      ...appProps.pageProps,
      token: localStorage.getItem("token"),
    },
  };
};
