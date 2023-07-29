import SmartPhone from "./version/SmartPhone";
import Desktop from "./version/Desktop";

const Login = () => {
  const winWdth: number = window.innerWidth;

  return <>{winWdth < 900 ? <SmartPhone /> : <Desktop />}</>;
};

export default Login;
