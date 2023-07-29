import React from "react";
import { Link } from "react-router-dom";
import { IoNotificationsOutline as NotifIcon } from "react-icons/io5";
import { CiUser as UserIcon } from "react-icons/ci";

const Nav = () => {
  const winWdth: number = window.innerWidth;

  return (
    <nav>
      <figure className="leftNavBrand">
        <img src="" alt="Web app Logo" />
        <figcaption>Web Name</figcaption>
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
            <li>
              <NotifIcon />
            </li>
            <li>
              <UserIcon />
            </li>
          </ul>
        </>
      ) : (
        <img src="" alt="User Profile Image" />
      )}
    </nav>
  );
};

export default Nav;
