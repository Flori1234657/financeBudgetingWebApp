import React from "react";
import KuletaIMeCart from "../../components/pages/kreu/KuletaIMeCart";
import CategoryExpsChart from "../../components/pages/kreu/CategoryExpsChart";
import KufijteBuxhetorCart from "../../components/pages/kreu/KufijteBuxhetorCart";
import QëllimetFinanciareProgress from "../../components/pages/kreu/QëllimetFinanciareProgress";

const Kreu = () => {
  return (
    <main className="kreuMain">
      <h2>Përshëndetje User</h2>
      <section aria-label="Graphic's Container" className="kreuGraphCont">
        <div className="kreuGrphUp" aria-label="Group for 3 graphics">
          <KuletaIMeCart />
          <CategoryExpsChart />
          <KufijteBuxhetorCart />
        </div>
        <div className="kreuGrphDown" aria-label="Group for 2 graphics">
          <div className="grafikuMadh"></div>
          <QëllimetFinanciareProgress />
        </div>
      </section>
      <h1>Finance and Budgeting WebApp</h1>
    </main>
  );
};

export default Kreu;
