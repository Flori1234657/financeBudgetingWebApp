import React from "react";
import KuletaCard from "../../components/pages/kuleta/KuletaCard";
import QellimetFinancCard from "../../components/pages/kuleta/QellimetFinancCard";
import ShpenzimetXBuxhetin from "../../components/pages/kuleta/ShpenzimetXBuxhetin";
import KufijBuxhetor from "../../components/pages/kuleta/KufijBuxhetor";
import KufijtBuxhMeTeSh from "../../components/pages/kuleta/KufijtBuxhMeTeSh";

const Kuleta = () => {
  return (
    <main className="Kuleta main">
      <h1 aria-label="Amount on your wallet">
        Shuma që ke për momentin në kuletë
      </h1>
      <section aria-label="Cards group">
        <div aria-label="First group">
          <KuletaCard />
          <QellimetFinancCard />
          <ShpenzimetXBuxhetin />
        </div>
        <div aria-label="Second group">
          <KufijBuxhetor />
          <KufijtBuxhMeTeSh />
        </div>
      </section>
      <h2>Financing and Budgeting WebApp</h2>
    </main>
  );
};

export default Kuleta;
