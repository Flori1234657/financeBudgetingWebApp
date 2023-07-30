import { lazy, Suspense } from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";

//Rreth nesh pages
const Rreth = lazy(() => import("./pages/Rreth"));
const Dokumentacioni = lazy(() => import("./pages/Dokumentacioni"));
const Faqs = lazy(() => import("./pages/Faqs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

const RrethNesh = () => {
  return (
    <main className="About main">
      <nav>
        <ul>
          <li>
            <Link to="/rrethNesh/rreth">Rreth</Link>
          </li>
          <li>
            <Link to="/rrethNesh/dokumentacioni">Dokumentacioni</Link>
          </li>
          <li>
            <Link to="/rrethNesh/faqs">FAQ'S</Link>
          </li>
          <li>
            <Link to="/rrethNesh/privacyPolicy">Privacy Policy</Link>
          </li>
        </ul>
      </nav>
      <aside>
        <BrowserRouter>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/rrethNesh/rreth" element={<Rreth />} />
              <Route
                path="/rrethNesh/dokumentacioni"
                element={<Dokumentacioni />}
              />
              <Route path="/rrethNesh/faqs" element={<Faqs />} />
              <Route
                path="/rrethNesh/privacyPolicy"
                element={<PrivacyPolicy />}
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </aside>
    </main>
  );
};

export default RrethNesh;
