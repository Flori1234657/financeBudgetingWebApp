import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Kreu from "./pages/kreu/Kreu";
import GjurmoShpenzimet from "./pages/gjurmoShpenzimet/GjurmoShpenzimet";
import Kuleta from "./pages/kuleta/Kuleta";
import Analiza from "./pages/analiza/Analiza";
import RrethNesh from "./pages/rrethNesh/RrethNesh";
import Nav from "./nav/Nav";
import FooterNav from "./nav/FooterNav";

function App() {
  const winWdth: number = window.innerWidth;

  return (
    <BrowserRouter>
      {winWdth < 900 ? <FooterNav /> : <Nav />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/kreu" element={<Kreu />} />
        <Route path="/gjurmoShpenzimet" element={<GjurmoShpenzimet />} />
        <Route path="/kuleta" element={<Kuleta />} />
        <Route path="/analiza" element={<Analiza />} />
        <Route path="/rrethNesh" element={<RrethNesh />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
