import React from "react";
import PieChartCard from "../../components/pages/analiza/PieChartCard";
import QëllimetFinancTëArrCard from "../../components/pages/analiza/QëllimetFinancTëArrCard";
import BuxhetiDhenMeShumCard from "../../components/pages/analiza/BuxhetiDhenMeShumCard";
import GrafikuKuletesCard from "../../components/pages/analiza/GrafikuKuletesCard";
import PhoneHeader from "../../components/universal/PhoneHeader";

const Analiza = () => {
  return (
    <>
      {" "}
      {window.innerWidth < 900 ? <PhoneHeader /> : ""}
      <main className="analytics-main">
        <h1>Analiza mbas 1 muaj</h1>
        <section aria-label="Graphics section">
          <div
            aria-label="PieChart and financing goals group"
            className="analytics-main_firstGraphsGroup"
          >
            <PieChartCard />
            <QëllimetFinancTëArrCard />
          </div>
          <BuxhetiDhenMeShumCard />
          <GrafikuKuletesCard />
        </section>
        <h1>Financing and Budgeting WebApp</h1>
      </main>
    </>
  );
};

export default Analiza;
