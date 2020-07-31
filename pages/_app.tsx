import React from 'react';
import App, { AppProps } from 'next/app';

import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
class MyApp extends App {
  render() {
    const { Component, pageProps }: AppProps = this.props;
    return (
        <Component {...pageProps} />
    );
  }
}

export default MyApp;
