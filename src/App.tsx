import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import Login from "./pages/login/Login";
import Nav from "./nav/Nav";

// # kjo qe do bejm posht eshte code spliting InshaaAllah
// # Avantzhi esht permirsimi performances
//   > I bejm download fileve vetem kur na duhen dhe jo gjith fileve njehershi
const Kreu = lazy(() => import("./pages/kreu/Kreu"));
// ! Kjo import("...") quhet dynamic import

const GjurmoShpenzimet = lazy(
  () => import("./pages/gjurmoShpenzimet/GjurmoShpenzimet")
);
const Kuleta = lazy(() => import("./pages/kuleta/Kuleta"));
const Analiza = lazy(() => import("./pages/analiza/Analiza"));
const RrethNesh = lazy(() => import("./pages/rrethNesh/RrethNesh"));
const FooterNav = lazy(() => import("./nav/FooterNav"));

//Rreth nesh pages
const Rreth = lazy(() => import("./pages/rrethNesh/pages/Rreth"));
const Dokumentacioni = lazy(
  () => import("./pages/rrethNesh/pages/Dokumentacioni")
);
const Faqs = lazy(() => import("./pages/rrethNesh/pages/Faqs"));
const PrivacyPolicy = lazy(
  () => import("./pages/rrethNesh/pages/PrivacyPolicy")
);

function App() {
  const winWdth: number = window.innerWidth;
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <BrowserRouter>
      {showNav ? winWdth < 900 ? <FooterNav /> : <Nav /> : ""}
      <Suspense fallback={<h1>Ju lutem prisni...</h1>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/kreu" element={<Kreu setShowNav={setShowNav} />} />
          <Route path="/gjurmoShpenzimet" element={<GjurmoShpenzimet />} />
          <Route path="/kuleta" element={<Kuleta />} />
          <Route path="/analiza" element={<Analiza />} />
          <Route path="/rrethNesh" element={<RrethNesh />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
