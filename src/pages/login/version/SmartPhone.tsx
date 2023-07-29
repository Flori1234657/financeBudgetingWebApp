const SmartPhone = () => {
  return (
    <main className="phoneLogin">
      <form>
        <figure className="logo&text">
          <img src="" alt="Logo" loading="lazy" />
          <h1>Page title</h1>
        </figure>
        <div className="phLogin-btnContainer" role="group">
          <button>Vazhdo me Facebook</button>
          <button>Vazhdo me Google Acc.</button>
          <div className="phLogin-secondBtnCont" role="group">
            <button>Ringarko</button>
            <button>Tutorial</button>
          </div>
        </div>
        <h3>Liçensa dhe termat e përdorimit</h3>
      </form>
    </main>
  );
};

export default SmartPhone;
