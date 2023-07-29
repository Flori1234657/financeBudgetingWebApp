import React from "react";
import { Props } from "./universalCom/ProgessBarsWithText";
import ProgessBarsWithText from "./universalCom/ProgessBarsWithText";

const QëllimetFinanciareProgress: React.FC = () => {
  //te dhenat nga database InshaaAllah
  const provObj: Props[] = [
    {
      kategQell: "PerDuba",
      value: 45,
      max: 1200,
      id: 1,
      low: 30,
      high: 90,
    },
    {
      kategQell: "PerDuba",
      value: 45,
      max: 1200,
      id: 2,
      low: 30,
      high: 90,
    },
    {
      kategQell: "PerDuba",
      value: 45,
      max: 1200,
      id: 3,
      low: 30,
      high: 90,
    },
  ];
  return (
    <div aria-label="Financing goal's cart">
      <h2>Qëllimet Financiare</h2>
      {provObj.map((el) => (
        <ProgessBarsWithText key={`progressbarswthtxt${el.id}`} {...el} />
      ))}
    </div>
  );
};

export default QëllimetFinanciareProgress;
