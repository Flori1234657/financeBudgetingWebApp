import { useState, lazy, Suspense, useEffect } from "react";
import PhoneHeader from "../../components/universal/PhoneHeader";

const RrethNesh = () => {
  const [version, setVersion] = useState<string>("rreth");

  //Rreth nesh pages
  const Rreth = lazy(() => import("./pages/Rreth"));
  const Dokumentacioni = lazy(() => import("./pages/Dokumentacioni"));
  const Faqs = lazy(() => import("./pages/Faqs"));
  const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

  //Page to return FC InshaaAllah
  const returnedCompFc = (): JSX.Element => {
    switch (version) {
      case "rreth":
        return <Rreth />;
      case "dokumentacioni":
        return <Dokumentacioni />;
      case "faqs":
        return <Faqs />;
      case "privacyPolicy":
        return <PrivacyPolicy />;
      default:
        return <Rreth />;
    }
  };

  //Page to return state InshaaAllah
  const [returnComp, setReturnComp] = useState<JSX.Element>(returnedCompFc());

  useEffect(() => {
    setReturnComp(returnedCompFc());
  }, [version]);

  return (
    <>
      {" "}
      {window.innerWidth < 900 ? <PhoneHeader /> : ""}
      <main className="about-main">
        <nav>
          <ul>
            <li
              aria-label="Link For Naviagion"
              onClick={() => setVersion("rreth")}
            >
              Rreth
            </li>
            <li
              aria-label="Link For Naviagion"
              onClick={() => setVersion("dokumentacioni")}
            >
              Dokumentacioni
            </li>
            <li
              aria-label="Link For Naviagion"
              onClick={() => setVersion("faqs")}
            >
              FAQ'S
            </li>
            <li
              aria-label="Link For Naviagion"
              onClick={() => setVersion("privacyPolicy")}
            >
              Privacy Policy
            </li>
          </ul>
        </nav>
        <aside>
          <Suspense>{returnComp}</Suspense>
        </aside>
      </main>
    </>
  );
};

export default RrethNesh;
