import PieChart from "./charts/PieChart";

const PieChartCard = () => {
  return (
    <div aria-label="PieChart card" className="analyticsPieChartCard">
      <h2>Kategoria që ke shpenzuar më shumë</h2>
      <div aria-label="Chart and text info">
        <PieChart />
      </div>
    </div>
  );
};

export default PieChartCard;
