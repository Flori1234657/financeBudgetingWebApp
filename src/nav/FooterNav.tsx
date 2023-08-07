import { useState } from "react";
import AnalizIcon from "../assets/images/icons/footerNav/analiz.png";
import GjurShpenzIcn from "../assets/images/icons/footerNav/gjurmoShpenz.png";
import HomeIcn from "../assets/images/icons/footerNav/home.png";
import PortofoIcn from "../assets/images/icons/footerNav/portofol.png";
import RrethIcn from "../assets/images/icons/footerNav/rreth.png";
import { Link } from "react-router-dom";

interface TogleNav {
  kreu: boolean;
  gjurmoShpenzimet: boolean;
  kuleta: boolean;
  analiza: boolean;
  rrethNesh: boolean;
}

const FooterNav = () => {
  const [changeNav, setChangeNav] = useState({
    kreu: true,
    gjurmoShpenzimet: false,
    kuleta: false,
    analiza: false,
    rrethNesh: false,
  });

  return (
    <nav className="phone--Nav">
      <ul className="deskNavItems">
        <li className={changeNav.kreu ? "active" : ""}>
          <Link
            to="/kreu"
            onClick={() => {
              setChangeNav({
                kreu: true,
                gjurmoShpenzimet: false,
                kuleta: false,
                analiza: false,
                rrethNesh: false,
              });
            }}
          >
            <img src={HomeIcn} alt="Home link icon" />
            <h5>Kreu</h5>
          </Link>
        </li>
        <li className={changeNav.gjurmoShpenzimet ? "active" : ""}>
          <Link
            to="/gjurmoShpenzimet"
            onClick={() => {
              setChangeNav({
                kreu: false,
                gjurmoShpenzimet: true,
                kuleta: false,
                analiza: false,
                rrethNesh: false,
              });
            }}
          >
            <img src={GjurShpenzIcn} alt="Expenses link icon" />
            <h5>Gjurmo</h5>
          </Link>
        </li>
        <li className={changeNav.kuleta ? "active" : ""}>
          <Link
            to="kuleta"
            onClick={() => {
              setChangeNav({
                kreu: false,
                gjurmoShpenzimet: false,
                kuleta: true,
                analiza: false,
                rrethNesh: false,
              });
            }}
          >
            <img src={PortofoIcn} alt="Wallet link icon" />
            <h5>Kuleta</h5>
          </Link>
        </li>
        <li className={changeNav.analiza ? "active" : ""}>
          <Link
            to="analiza"
            onClick={() => {
              setChangeNav({
                kreu: false,
                gjurmoShpenzimet: false,
                kuleta: false,
                analiza: true,
                rrethNesh: false,
              });
            }}
          >
            {" "}
            <img src={AnalizIcon} alt="Analytics link icon" />
            <h5>Analiza</h5>
          </Link>
        </li>
        <li className={changeNav.rrethNesh ? "active" : ""}>
          <Link
            to="rrethNesh"
            onClick={() => {
              setChangeNav({
                kreu: false,
                gjurmoShpenzimet: false,
                kuleta: false,
                analiza: false,
                rrethNesh: true,
              });
            }}
          >
            <img src={RrethIcn} alt="About us link icon" />
            <h5>Rreth</h5>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
