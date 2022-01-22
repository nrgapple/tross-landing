import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import { AppProps } from 'next/app'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo
        title='Tross'
        description='Apps Built Today'
        openGraph={{
          site_name: 'Tross',
          url: 'https://www.tross.app',
          title: 'Tross - Pluggable Engineers',
          description: 'Apps Built Today',
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
