import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Kenan Garayev</title>

      <meta property="og:title" content="Kenan Garayev" />
      <meta
        property="og:description"
        content="Kenan Garayev's Portfolio Site"
      />
      <meta property="og:image" content={"/thumbnail.png"} />
      <meta property="og:url" content="http://kgarayev.netlify.app" />
      <meta property="og:type" content="website" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Kenan Garayev" />
      <meta
        name="twitter:description"
        content="Kenan Garayev's Portfolio Site"
      />
      <meta name="twitter:image" content="http://kgarayev.netlify.app" />

      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
