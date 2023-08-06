import React from "react";
import { Props } from "./universalCom/ProgessBarsWithText";
import ProgessBarsWithText from "./universalCom/ProgessBarsWithText";

const KufijteBuxhetorCart: React.FC = () => {
  //kjo sa per prov te dhenat priten nga database InshaaAllah
  const provObj: Props[] = [
    {
      kategQell: "Kategori",
      value: 45,
      max: 1200,
      id: 1,
      low: 30,
      high: 90,
    },
    {
      kategQell: "Kategori",
      value: 45,
      max: 1200,
      id: 2,
      low: 30,
      high: 90,
    },
    {
      kategQell: "Kategori",
      value: 45,
      max: 1200,
      id: 3,
      low: 30,
      high: 90,
    },
  ];
  return (
    <div
      className="krGrphUp-card3"
      aria-label="Budget Limits progress bar's cart"
    >
      <h2>Kufijtë buxhetor</h2>
      <div aria-label="Group for progress bar's and some option's">
        {provObj.map((el) => (
          <ProgessBarsWithText key={`progressbarswthtxt${el.id}`} {...el} />
        ))}
        <div className="sortOptionsGroup" aria-label="Options group">
          <h3>Renditja</h3>
          <select>
            <option value="alfabeti">Alfabeti</option>
            <option value="maxShumaLart">Max shuma Lart</option>
            <option value="maxShumaPosht">Max shuma Posht</option>
            <option value="përqindjaLart">Përqindja Lart</option>
            <option value="përqindjaPosht">Përqindja Posht</option>
          </select>
          <button>SHTO</button>
        </div>
      </div>
    </div>
  );
};

export default KufijteBuxhetorCart;
