import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt">
      <Head>

        {/* ---- Configuração Geral ---- */}
        <title>Sushi Rairakku</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/Logo_sem_fundo-transformed.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ---- Font Awesome PRO ---- */}
        <link
          rel="stylesheet"
          href="/css/app-wa-759e655e9594906b7aa7a0115e8d04dd.css?vsn=d"
        />

        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/all.css" />

        {/* Duotone + Sharp + Packs PRO */}
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-solid.css" />
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-regular.css" />
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-light.css" />
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-thin.css" />

        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-duotone-solid.css" />
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-duotone-regular.css" />
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-duotone-light.css" />
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-duotone-thin.css" />

        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/duotone-regular.css" />
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/duotone-light.css" />
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/duotone-thin.css" />

      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
