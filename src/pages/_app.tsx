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
        title='Tross | Product Development'
        description='Apps Built Today'
        openGraph={{
          site_name: 'Tross',
          type: 'website',
          url: 'https://www.tross.app',
          title: 'Tross - Pluggable Engineers',
          description: 'Apps Built Today',
        }}
      />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Passion+One&display=swap'
        rel='stylesheet'
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
