import { useState, lazy, Suspense, useEffect } from "react";

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
    <main className="About main">
      <nav>
        <ul>
          <button
            aria-label="Button For Naviagion"
            onClick={() => setVersion("rreth")}
          >
            Rreth
          </button>
          <button
            aria-label="Button For Naviagion"
            onClick={() => setVersion("dokumentacioni")}
          >
            Dokumentacioni
          </button>
          <button
            aria-label="Button For Naviagion"
            onClick={() => setVersion("faqs")}
          >
            FAQ'S
          </button>
          <button
            aria-label="Button For Naviagion"
            onClick={() => setVersion("privacyPolicy")}
          >
            Privacy Policy
          </button>
        </ul>
      </nav>
      <aside>
        <Suspense>{returnComp}</Suspense>
      </aside>
    </main>
  );
};

export default RrethNesh;
