import App, { AppProps } from 'next/app';
import React from 'react';

class MyApp extends App {
  render() {
    const { Component, pageProps }: AppProps = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
