import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../utils/gs'

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
            content={`https://tross-og-image.vercel.app/**Tross**%20-%20Pluggable%20Engineers.png?theme=light&md=1&fontSize=80px&images=https%3A%2F%2Fuser-images.githubusercontent.com%2F10817537%2F150622627-9a5a7633-b792-4782-b38d-7e62ac99db95.png&widths=1000&heights=600`}
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
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
