// src/pages/_app.js
import '../styles/globals.css'; // CSS global
import "../styles/navbar.css";
import "../styles/hero.css";
import "../styles/about.css";
import "../styles/features.css";
import "../styles/menu.css";
import "../styles/order.css";
import "../styles/location.css";
import "../styles/footer.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
