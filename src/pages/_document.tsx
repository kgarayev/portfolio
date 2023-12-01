import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-87XFY2X9NB"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-87XFY2X9NB');
              `,
          }}
        />

        {/* <title>Kenan Garayev</title> */}
        <meta property="og:title" content="Kenan Garayev" />
        <meta property="og:description" content="Kenan Garayev's Website" />
        <meta property="og:site_name" content="Kenan Garayev's Website"></meta>
        <meta property="og:image" content="http://kgarayev.com/thumbnail.png" />
        <meta property="og:url" content="http://kgarayev.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="http://kgarayev.com" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kenan Garayev" />
        <meta
          name="twitter:description"
          content="Kenan Garayev's Portfolio Site"
        />
        <meta
          name="twitter:image"
          content="http://kgarayev.netlify.app/twitter-image.png"
        />
      </Head>
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
