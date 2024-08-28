import { GoogleLogo } from "phosphor-react";
import Button from '../../../components/Button';

import { useLanguage } from "@/context/LanguageContext";

const ACTIONS = {
  LOGIN: "login",
  SIGNUP: "signup",
};

const CardAuth = ({ title, action }) => {

  const { l } = useLanguage();
  return (
    <div className="cardAuth">
      <h1>{title ?? "N/A "}</h1>
      <div className="form">
        <div>
          <p>Email</p>
          <input type="text" placeholder="email" />
        </div>
        <div>
          <p>Password</p>
          <input type="password" placeholder="password" />
        </div>
      </div>
      <div className="buttonAuth">
        <Button title={"Siguiente"} />
      </div>
      <div className="separation">
        <hr />
        <p>O</p>
        <hr />
      </div>
      <GoogleLogo className="googleIcon" size={32} />
      {action === ACTIONS.LOGIN ? (
        <>
          <p>{l("signup.createAccountInvitation")}</p>
          <div className="buttonAuth">
            <Button title={"Registrarse"} />
          </div>
        </>
      ) : (
        <p>¿Ya tienes una cuenta? <a href="#">¡Iniciar sesión!</a></p>
      )}
    </div>
  );
};

export default CardAuth;
