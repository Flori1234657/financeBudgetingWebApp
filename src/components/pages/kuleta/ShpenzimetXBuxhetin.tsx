import React from "react";
import ProgresBars from "./universal/ProgresBars";
import { Props } from "./universal/ProgresBars";

const provObj: Props[] = [
  {
    id: 1,
    qellimi: "Kategoria",
    value: 36,
    max: 12.3,
    low: 32,
    high: 90,
  },
];

const ShpenzimetXBuxhetin = () => {
  return (
    <div aria-label="Expenses compared to budget">
      <h2>Shpenzimet në krahasim me buxhetin</h2>
      <ul>
        {provObj.map((el) => {
          return (
            <li key={el.id}>
              <h3>{el.qellimi}</h3>
              <ProgresBars key={el.id} {...el} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShpenzimetXBuxhetin;
