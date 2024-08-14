import { GoogleLogo } from "phosphor-react";
import Button from "../../../components/Button";
import "./style/auth.css";

const ACTIONS = {
  LOGIN: "login",
  SIGNUP: "signup",
};

const CardAuth = ({ title, action}) => {
  return (
    <div className="cardAuth">
      <h1>{title ?? "N/A "}</h1>
      <div>
        <p>Email</p>
        <input type="text" placeholder="email" />
        <p>Password</p>
        <input type="password" placeholder="password" />
        <div className="buttonAuth">
          <Button title={"Siguiente"} />
        </div>
      </div>
      <div>
        <hr />
        <p>O</p>
        <hr />
      </div>
      <GoogleLogo size={32} />
      <p>¿Aún no tienes cuenta? ¡Registrate ya!</p>
      <div className="buttonAuth">
        <Button title={"Registrarse"} />
      </div>
    </div>
  );
};

export default CardAuth;
