import React from "react";

const KuletaIMeCart: React.FC = () => {
  return (
    <div className="krGrphUp-card1" aria-label="Wallet Cart">
      <h2>Kuleta Ime</h2>
      <h2>
        123.200 <span aria-label="Currency name">LEK</span>
      </h2>
      <div aria-label="Updated date group">
        <h3>Përditësuar së fundmi në:</h3>
        <h4>DD/MM/VVVV</h4>
      </div>
    </div>
  );
};

export default KuletaIMeCart;
