import { Link } from "react-router-dom";
import { Props } from "./universal/ProgresBars";
import ProgresBars from "./universal/ProgresBars";

const QellimetFinancCard = () => {
  const provObj: Props[] = [
    {
      id: 1,
      qellimi: "Qëllimi 1",
      value: 36,
      max: 12.3,
      low: 32,
      high: 90,
    },
    {
      id: 3,
      qellimi: "Qëllimi 2",
      value: 36,
      max: 54,
      low: 32,
      high: 90,
    },
    {
      id: 4,
      qellimi: "Qëllimi 3",
      value: 36,
      max: 100,
      low: 32,
      high: 90,
    },
  ];

  return (
    <div aria-label="Saving goal's card">
      <h2>Qëllimet për të kursyer</h2>
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
      <Link to="/qëllimetEKursimit">Shko</Link>
    </div>
  );
};

export default QellimetFinancCard;
