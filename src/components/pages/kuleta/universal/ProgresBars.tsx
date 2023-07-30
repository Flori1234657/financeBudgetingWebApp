import React from "react";

export interface Props {
  id: number;
  qellimi: string;
  value: number;
  max: number;
  low: number;
  high: number;
}

const ProgresBars: React.FC<Props> = (propObj) => {
  return (
    <div aria-label="Progress info group">
      <meter
        min={0}
        max={100}
        value={propObj.value}
        low={propObj.low || 0}
        high={propObj.high || 100}
      ></meter>
      <h3>{propObj.max}%</h3>
    </div>
  );
};

export default ProgresBars;
