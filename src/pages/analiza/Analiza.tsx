import React from "react";
import PieChartCard from "../../components/pages/analiza/PieChartCard";
import QëllimetFinancTëArrCard from "../../components/pages/analiza/QëllimetFinancTëArrCard";
import BuxhetiDhenMeShumCard from "../../components/pages/analiza/BuxhetiDhenMeShumCard";
import GrafikuKuletesCard from "../../components/pages/analiza/GrafikuKuletesCard";

const Analiza = () => {
  return (
    <main className="Analytics main">
      <h1>Analiza mbas 1 muaj</h1>
      <section aria-label="Graphics section">
        <div aria-label="PieChart and financing goals group">
          <PieChartCard />
          <QëllimetFinancTëArrCard />
        </div>
        <BuxhetiDhenMeShumCard />
        <GrafikuKuletesCard />
      </section>
      <h2>Financing and Budgeting WebApp</h2>
    </main>
  );
};

export default Analiza;
