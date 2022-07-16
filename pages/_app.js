import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  cache: new InMemoryCache()
});
import '@styles/globals.css';

import Navbar from '@components/Navbar';
import { UserContext } from '@lib/context';
import { useUserData } from '@lib/hooks';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={userData}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster/>
      </UserContext.Provider>
    </ApolloProvider>
  );
}

export default MyApp;
