import React from "react";
import { BsTelephone as TelIcon } from "react-icons/bs";
import { MdOutlineEmail as EmailIcon } from "react-icons/md";

const Rreth = () => {
  return (
    <>
      <h1>Rreth Nesh </h1>
      <p>
        Ne jemi një kompani e cila merret me programim në web.Fokusi jonë
        kryesorë është që ti ofrojmë klientit tonë një webApp/website
        cilësor,duke përfshirë në ktë web shumë gjëra të nevojshme,si për të
        ndihmuar webin tuaj përveç se të jetë i aksesueshëm për përdoruesin
        gjithashtu edhe me një pamje të bukur,por nuk mbarojnë këtu të gjitha.
        <br />
        <br />
        Kompania jonë fokusohet që ky web të jetë i aksesueshëm edhe nga
        personat me aftësi të kufizuara gjë e cila e bën ktë web që edhe të ketë
        një rritje të mirë në google. Gjithashtu kodi shkruhet në mënyrë që të
        jetë i kuptueshëm edhe për programerat e tjerë.
      </p>
      <h2>Kontakto</h2>
      <div aria-label="Phone Group">
        <TelIcon />
        <h3>+355 68 839 3968</h3>
      </div>
      <div aria-label="Email Group">
        <EmailIcon />
        <h3>email@info.com</h3>
      </div>
    </>
  );
};

export default Rreth;
