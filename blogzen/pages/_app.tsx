//special file which serves as the main entry point for application
//and wraps all the pages.
//eg can be used to add navbar or footer or Authentification

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
