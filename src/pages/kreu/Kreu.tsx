import React, { useEffect } from "react";
import KuletaIMeCart from "../../components/pages/kreu/KuletaIMeCart";
import CategoryExpsChart from "../../components/pages/kreu/CategoryExpsChart";
import KufijteBuxhetorCart from "../../components/pages/kreu/KufijteBuxhetorCart";
import QëllimetFinanciareProgress from "../../components/pages/kreu/QëllimetFinanciareProgress";
import WebLogo from "../../assets/images/logo.png";
import ProfilImg from "../../assets/images/profilImg.png";
import { useLocation } from "react-router-dom";
import LineChart from "../../components/pages/kreu/charts/LineChart";

const Kreu: React.FC<{
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setShowNav }) => {
  const location = useLocation();

  useEffect(() => {
    location.pathname != "/" ? setShowNav(true) : "";
  }, [location]);

  return (
    <>
      {window.innerWidth < 900 ? (
        <header>
          <div aria-label="content container">
            <figure>
              <img src={WebLogo} alt="Website Logo" />
              <figcaption>Gjeniu Buxhetor</figcaption>
            </figure>
            <img src={ProfilImg} alt="Profile Img" />
          </div>
        </header>
      ) : (
        ""
      )}
      <main className="kreuMain">
        <h1>Përshëndetje User</h1>
        <section aria-label="Graphic's Container" className="kreuGraphCont">
          <div className="kreuGrphUp" aria-label="Group for 3 graphics">
            <KuletaIMeCart />
            <CategoryExpsChart />
            <KufijteBuxhetorCart />
          </div>
          <div className="kreuGrphDown" aria-label="Group for 2 graphics">
            <div className="grafikuMadh">
              <LineChart />
            </div>
            <QëllimetFinanciareProgress />
          </div>
        </section>
        <h1 className="bottomTitle">WebApp për menaxhimin e financave</h1>
      </main>
    </>
  );
};

export default Kreu;
