import React from "react";
import { BiSearch as SearchIcn } from "react-icons/bi";
import { LiaFilterSolid as FilterIcn } from "react-icons/lia";
import ShpenzimetList from "./components/ShpenzimetList";

const ListaShpenzimeve = () => {
  return (
    <div aria-label="Expenses List Group">
      <section aria-label="Options Group">
        <h2 aria-label="Expenses List">Lista e shpenzimeve</h2>
        <div aria-label="Search and filter group">
          <div aria-label="Search group">
            <input
              type="search"
              aria-placeholder="Search"
              placeholder="Kërko"
            />
            <button aria-label="Search Button">
              <SearchIcn />
            </button>
          </div>
          <div aria-label="Filter group">
            <h3 aria-label="Filters">Filtrat</h3>
            <button aria-label="Filter Button">
              <FilterIcn />
            </button>
          </div>
        </div>
        <ul aria-label="Category select list">
          <li aria-label="food's">Ushqimore</li>
          <li aria-label="hygiene">Higjenike</li>
          <li aria-label="wearing's">Veshje</li>
          <li aria-label="home">Shtëpiake</li>
        </ul>
      </section>

      <ShpenzimetList />
    </div>
  );
};

export default ListaShpenzimeve;
