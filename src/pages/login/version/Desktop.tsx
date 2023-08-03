import miniDescIcon from "../../../assets/images/icons/miniDescpIcon.png";
import Logo from "../../../assets/images/logo.png";
import { BiLogoFacebook as FbLogo } from "react-icons/bi";
import { PiGoogleChromeLogoBold as GoogleLogo } from "react-icons/pi";

const Desktop = () => {
  return (
    <main className="desktLogin">
      <form>
        <figure className="topMinDesc">
          <img
            src={miniDescIcon}
            alt="Icon for mini description"
            loading="lazy"
          />
          <h3>Menaxhim Financash</h3>
        </figure>
        <figure className="logoDHtext">
          <img src={Logo} alt="Logo" loading="lazy" />
          <h1>Gjeniu Buxhetor</h1>
        </figure>
        <div className="dskLogin-btnContainer" role="group">
          <button>
            {" "}
            <span>
              <FbLogo />
            </span>
            Vazhdo me Facebook
          </button>
          <button>
            <span>
              <GoogleLogo />
            </span>
            Vazhdo me Google Account
          </button>
          <div className="dskLogin-secondBtnCont" role="group">
            <button>Ringarko</button>
            <button>Tutorial</button>
          </div>
        </div>
        <h3>Liçensa dhe termat e përdorimit të webit Privacy Policy</h3>
      </form>
      <div
        className="bckgLoginDesk"
        aria-label="Background image for login page"
      ></div>
    </main>
  );
};

export default Desktop;
