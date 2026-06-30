import { useState } from "react";
import { content } from "./data/content";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Bridge from "./components/Bridge/Bridge";
import Business from "./components/Business/Business";
import Services from "./components/Services/Services";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Footer from "./components/Footer/Footer";

function App() {
  const [lang, setLang] = useState("pt");
  const t = content[lang];

  return (
    <>
      <Header t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <About t={t} />
      <Bridge t={t} />
      <Business t={t} />
      <Services t={t} />
      <FinalCTA t={t} />
      <Footer t={t} />
    </>
  );
}

export default App;