import { DefaultSeo } from 'next-seo'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
          <meta
            property='og:image'
            content={`https://og-image.vercel.app/.png?theme=light&images=https://user-images.githubusercontent.com/10817537/150620018-4c4e1342-7c23-428a-901d-dcd7b9f2104c.png`}
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
