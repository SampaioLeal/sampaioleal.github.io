import "../styles/globals.css";
import { StylesProvider } from "@material-ui/core/styles";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <StylesProvider injectFirst>
      <Head>
        <title>Antonio Sampaio - Portfólio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="google-site-verification"
          content="JCGi0d0RZVpYH_VSR39xTsHUA2xaOS2rxo3Lh5excww"
        />
        <meta property="og:site_name" content="Antonio Sampaio - Portfólio" />
        <meta property="og:title" content="Antonio Sampaio - Portfólio" />
        <meta
          property="og:description"
          content="Descobrindo a tecnologia desde os 14, fui introduzido ao
          desenvolvimento Web e, desde então, meu foco é dominar as
          tecnologias Node.JS e React/React Native, utilizando TypeScript
          para um melhor ambiente de desenvolvimento e trabalho em equipe."
        />
        <meta name="author" content="Antonio Sampaio Leal Neto" />
        <meta property="og:locale" content="pt_BR" />
        <meta http-equiv="content-language" content="pt-br" />
        <meta
          name="keywords"
          content="antonio, sampaio, leal, desenvolvedor, fullstack, desenvolvimento, sampaioleal"
        />
        <meta property="og:image" content="/samp.jpeg" />
      </Head>

      <Component {...pageProps} />
    </StylesProvider>
  );
}

export default MyApp;
