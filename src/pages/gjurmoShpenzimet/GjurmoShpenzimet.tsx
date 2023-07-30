import React from "react";
import Form from "../../components/pages/gjurmoShpenzimet/Form";
import ListaShpenzimeve from "../../components/pages/gjurmoShpenzimet/ListaShpenzimeve";

const GjurmoShpenzimet = () => {
  return (
    <main className="gjurmoShpenzimetMain">
      <h1>Gjurmo shpenzimet e tua</h1>
      <section
        className="shpenzimetMiddleSection"
        aria-label="Expenses group section"
      >
        <Form />
        <ListaShpenzimeve />
      </section>
      <h1>Finance and Budgeting WebApp</h1>
    </main>
  );
};

export default GjurmoShpenzimet;
