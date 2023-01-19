import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/navbar.modules.css";
import "../styles/home.modules.css";
import "../styles/root.modules.css";
import "../styles/about.modules.css";
import "../styles/contact.modules.css";
import "../styles/testimonials.modules.css";
import "../styles/reviews.modules.css";
import "../styles/dropdown.modules.css";
import "../styles/sidebyside.modules.css";
import "../styles/icbcactiverehabilitation/icbcactiverehabilitation.modules.css";
import "../styles/icbcactiverehabilitation/activerehabilitationcontent.modules.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
