import Head from "next/head";
import theme from "../styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta
          name="google-site-verification"
          content="JCGi0d0RZVpYH_VSR39xTsHUA2xaOS2rxo3Lh5excww"
        />

        <title>Antonio Sampaio - Portfólio</title>
        <meta name="author" content="Antonio Sampaio Leal Neto" />
        <meta httpEquiv="content-language" content="pt-br" />
        <meta
          name="keywords"
          content="antonio, sampaio, leal, desenvolvedor, fullstack, desenvolvimento, sampaioleal"
        />
        <meta name="title" content="Antonio Sampaio - Portfólio" />
        <meta
          name="description"
          content="Desenvolvedor FullStack descobrindo a tecnologia desde os 14 anos. Atualmente especializado em React e Node."
        />

        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sampaioleal.dev.br/" />
        <meta property="og:title" content="Antonio Sampaio - Portfólio" />
        <meta
          property="og:description"
          content="Desenvolvedor FullStack descobrindo a tecnologia desde os 14 anos. Atualmente especializado em React e Node."
        />
        <meta property="og:image" content="/presentation.png" />
        <meta property="og:site_name" content="Antonio Sampaio - Portfólio" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sampaioleal.dev.br/" />
        <meta property="twitter:title" content="Antonio Sampaio - Portfólio" />
        <meta
          property="twitter:description"
          content="Desenvolvedor FullStack descobrindo a tecnologia desde os 14 anos. Atualmente especializado em React e Node."
        />
        <meta property="twitter:image" content="/presentation.png" />
      </Head>

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
