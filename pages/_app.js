import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.css'
import { useState } from 'react'
import data from '../data';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  return (
    <>
      <NextNProgress
        options={{ easing: "ease", speed: 500 }}
        color={data.styles.color.secondary}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
