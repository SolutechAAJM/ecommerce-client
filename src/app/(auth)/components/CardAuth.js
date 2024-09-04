import { GoogleLogo } from "phosphor-react";
import Button from '../../../components/Button';

import { useLanguage } from "@/context/LanguageContext";
import { ACTIONS } from "./Actions";

const CardAuth = ({ title, action }) => {

  const { l } = useLanguage();
  return (
    <div className="cardAuth">
      <h1>{title ?? "N/A "}</h1>
      <div className="form">
        <div>
          <p>{l("login.email")}</p>
          <input type="text" placeholder={l("login.email")} />
        </div>
        <div>
          <p>{l("login.password")}</p>
          <input type="password" placeholder={l("login.password")} />
        </div>
      </div>
      <div className="buttonAuth">
        <Button title={l("login.next")} />
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
            <Button title={l("signup.register")} />
          </div>
        </>
      ) : (
        <p>{l('login.alreadyHaveAccount')} <a href="#">{l("login.login")}</a></p>
      )}
    </div>
  );
};

export default CardAuth;
