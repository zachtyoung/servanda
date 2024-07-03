import logo from "../src/assets/site-images/Print_Transparent.svg";
import socialLogo from "../src/assets/site-images/FullLogo.png";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta property="og:title" content="Servanda Advisors" />
        <meta
          property="og:description"
          content="Your go-to advisors for securing and preserving your future."
        />
        <meta property="og:image" content={socialLogo} />
        <meta property="og:url" content="https://www.servandaadvisors.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Servanda Advisors" />
        <meta
          name="twitter:description"
          content="Your go-to advisors for securing and preserving your future."
        />
        <meta name="twitter:image" content={socialLogo} />
        <meta name="twitter:url" content="https://www.servandaadvisors.com" />
      </Helmet>
      <img src={logo} />
      <div className="cta">Coming Soon</div>
    </div>
  );
}

export default App;
