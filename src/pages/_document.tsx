import { DefaultSeo } from 'next-seo'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
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
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
          <meta
            property='og:image'
            content='https://og-image.vercel.app/.png?theme=light&images=https%3A%2F%2Fuser-images.githubusercontent.com%2F10817537%2F150620018-4c4e1342-7c23-428a-901d-dcd7b9f2104c.png'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
