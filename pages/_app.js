import { QueryClient, QueryClientProvider } from "react-query";
import GlobalContextProvider from '../context/GlobalContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient} >

    <GlobalContextProvider >
      <Component {...pageProps} />
    </GlobalContextProvider>

    </QueryClientProvider>

  )
}

export default MyApp
