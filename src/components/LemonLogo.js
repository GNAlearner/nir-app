import { useNavigate } from "react-router-dom";
import Logo from "../logo_head.png";

const LemonLogo = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/");
  };

  return <img src={Logo} alt="Logo" className="logo" onClick={goToMainPage} />;
};

export default LemonLogo;