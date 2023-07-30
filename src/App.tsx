import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// # kjo qe do bejm posht eshte code spliting InshaaAllah
// # Avantzhi esht permirsimi performances
//   > I bejm download fileve vetem kur na duhen dhe jo gjith fileve njehershi
const Login = lazy(() => import("./pages/login/Login"));
// ! Kjo import("...") quhet dynamic import
const Kreu = lazy(() => import("./pages/kreu/Kreu"));
const GjurmoShpenzimet = lazy(
  () => import("./pages/gjurmoShpenzimet/GjurmoShpenzimet")
);
const Kuleta = lazy(() => import("./pages/kuleta/Kuleta"));
const Analiza = lazy(() => import("./pages/analiza/Analiza"));
const RrethNesh = lazy(() => import("./pages/rrethNesh/RrethNesh"));
const Nav = lazy(() => import("./nav/Nav"));
const FooterNav = lazy(() => import("./nav/FooterNav"));

function App() {
  const winWdth: number = window.innerWidth;

  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        {winWdth < 900 ? <FooterNav /> : <Nav />}
      </Suspense>
      <Routes>
        <Suspense fallback={<h1>Ju lutem prisni...</h1>}>
          <Route path="/" element={<Login />} />
          <Route path="/kreu" element={<Kreu />} />
          <Route path="/gjurmoShpenzimet" element={<GjurmoShpenzimet />} />
          <Route path="/kuleta" element={<Kuleta />} />
          <Route path="/analiza" element={<Analiza />} />
          <Route path="/rrethNesh" element={<RrethNesh />} />
        </Suspense>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
