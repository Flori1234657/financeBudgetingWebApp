import React from "react";

export interface Props {
  kategQell: string;
  value: number;
  max: number;
  id: number;
  low?: number;
  high?: number;
}

const ProgessBarsWithText: React.FC<Props> = (propObj) => {
  return (
    <div aria-label="Progress bar's group">
      <div aria-label="textGroup">
        <h3 key={`h3ID${propObj.id}`}>{propObj.kategQell}</h3>
      </div>

      <div
        aria-label="Group for progress bar's and text info"
        key={`prgsID${propObj.id}`}
      >
        <meter
          min={0}
          max={100}
          value={propObj.value}
          low={propObj.low || 0}
          high={propObj.high || 100}
        ></meter>
        <h4>
          {propObj.value}% <span>Max {propObj.max}</span>
        </h4>
      </div>
    </div>
  );
};

export default ProgessBarsWithText;
