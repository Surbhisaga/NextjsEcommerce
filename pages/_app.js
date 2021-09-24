import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import { Provider } from "react-redux";
import { store } from '../store'
import { auth } from '../firebase'
import { useEffect, useState } from 'react'
import { ChakraProvider } from "@chakra-ui/react"


function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  }, [])

  return (
    <>
      <Provider store={store} user={user}>
      <ChakraProvider>
        <Layout user={user} >
          <Component {...pageProps} user={user} />
        </Layout>
        </ChakraProvider>
      </Provider>
    </>
  )
}

export default MyApp
