import React from "react";
import { Link } from "react-router-dom";
import { IoNotificationsOutline as NotifIcon } from "react-icons/io5";
import { CiUser as UserIcon } from "react-icons/ci";
import LogoImg from "../assets/images/logo.png";

const Nav = () => {
  const winWdth: number = window.innerWidth;

  return (
    <nav className="large--Nav">
      <figure className="leftNavBrand">
        <img src={LogoImg} alt="Web app Logo" />
        <figcaption>Gjeniu Buxhetor</figcaption>
      </figure>
      {winWdth > 899 ? (
        <>
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
          <ul className="desk-nav-icons">
            <NotifIcon />

            <UserIcon />
          </ul>
        </>
      ) : (
        <img src="" alt="User Profile Image" />
      )}
    </nav>
  );
};

export default Nav;
