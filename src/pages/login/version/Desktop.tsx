import React from "react";

const Desktop = () => {
  return (
    <main className="desktLogin">
      <form>
        <figure className="topMinDesc">
          <img src="" alt="Icon for mini description" loading="lazy" />
          <h3>Mini description for the web</h3>
        </figure>
        <figure className="logo&text">
          <img src="" alt="Logo" loading="lazy" />
          <h1>Page title</h1>
        </figure>
        <div className="dskLogin-btnContainer" role="group">
          <button>Vazhdo me Facebook</button>
          <button>Vazhdo me Google Acc.</button>
          <div className="dskLogin-secondBtnCont" role="group">
            <button>Ringarko</button>
            <button>Tutorial</button>
          </div>
        </div>
        <h3>Liçensa dhe termat e përdorimit</h3>
      </form>
    </main>
  );
};

export default Desktop;
