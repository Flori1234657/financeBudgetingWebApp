import WebLogo from "../../assets/images/logo.png";
import ProfilImg from "../../assets/images/profilImg.png";

const PhoneHeader = () => {
  return (
    <header>
      <div aria-label="content container">
        <figure>
          <img src={WebLogo} alt="Website Logo" />
          <figcaption>Gjeniu Buxhetor</figcaption>
        </figure>
        <img src={ProfilImg} alt="Profile Img" />
      </div>
    </header>
  );
};

export default PhoneHeader;
