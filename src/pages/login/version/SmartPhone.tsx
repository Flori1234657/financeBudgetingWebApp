import Logo from "../../../assets/images/logo.png";
import { BiLogoFacebook as FbLogo } from "react-icons/bi";
import { PiGoogleChromeLogoBold as GoogleLogo } from "react-icons/pi";

const SmartPhone = () => {
  return (
    <main className="phoneLogin">
      <form>
        <figure className="logo&text">
          <img src={Logo} alt="Logo" loading="lazy" />
          <h1>Gjeniu Buxhetor</h1>
        </figure>
        <div className="phLogin-btnContainer" role="group">
          <button>
            <span>
              <FbLogo />
            </span>{" "}
            Vazhdo me Facebook
          </button>
          <button>
            {" "}
            <span>
              <GoogleLogo />
            </span>{" "}
            Vazhdo me Google Acc.
          </button>
          <div className="phLogin-secondBtnCont" role="group">
            <button>Ringarko</button>
            <button>Tutorial</button>
          </div>
        </div>
        <h3>Liçensa dhe termat e përdorimit të aplikacionit Privacy Policy</h3>
      </form>
    </main>
  );
};

export default SmartPhone;
