import React from "react";
import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <nav>
      <ul className="deskNavItems">
        <li>
          <Link to="/kreu">Kreu</Link>
        </li>
        <li>
          <Link to="/gjurmoShpenzimet">Gjurmo Shpenzimet</Link>
        </li>
        <li>
          <Link to="kuleta">Kuleta</Link>
        </li>
        <li>
          <Link to="analiza">Analizo</Link>
        </li>
        <li>
          <Link to="rrethNesh">Rreth Nesh</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
