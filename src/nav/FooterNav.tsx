import AnalizIcon from "../assets/images/icons/footerNav/analiz.png";
import AnalizActIcon from "../assets/images/icons/footerNav/analizActive.png";
import GjurShpenzIcn from "../assets/images/icons/footerNav/gjurmoShpenz.png";
import GjurShpenzIcnAc from "../assets/images/icons/footerNav/gjurmoShpenzActive.png";
import HomeIcn from "../assets/images/icons/footerNav/home.png";
import HomeAcIcon from "../assets/images/icons/footerNav/homeActive.png";
import PortofoIcn from "../assets/images/icons/footerNav/portofol.png";
import PortofoAcIcn from "../assets/images/icons/footerNav/portofolAcive.png";
import RrethIcn from "../assets/images/icons/footerNav/rreth.png";
import rrethAcIcn from "../assets/images/icons/footerNav/rrethActive.png";
import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <nav>
      <ul className="deskNavItems">
        <li className="active">
          <Link to="/kreu">
            <img src={HomeIcn} alt="Home link icon" />
          </Link>
        </li>
        <li>
          <Link to="/gjurmoShpenzimet">
            <img src={GjurShpenzIcn} alt="Expenses link icon" />
          </Link>
        </li>
        <li>
          <Link to="kuleta">
            <img src={PortofoIcn} alt="Wallet link icon" />
          </Link>
        </li>
        <li>
          <Link to="analiza">
            {" "}
            <img src={AnalizIcon} alt="Analytics link icon" />
          </Link>
        </li>
        <li>
          <Link to="rrethNesh">
            <img src={RrethIcn} alt="About us link icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
