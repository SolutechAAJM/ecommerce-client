"use client";

import CardAuth from "../components/CardAuth";
import ReturnAuth from "../components/ReturnAuth";
import Image from "next/image";
import "../components/style/auth.css";


const ACTIONS = {
  LOGIN: "login",
  SIGNUP: "signup",
};

const Signup = () => {

  // const {t} = useTranslation();

  return (
    <div className="signup">
      <section>
        <div>
          <ReturnAuth />
        </div>
        <header className="header">
          <Image
            className="logo"
            src="/Logo.png"
            alt="logo"
            width={170}
            height={150}
          />
          <div>
            <h1>Crea tu cuenta</h1>
            <p>
              ¡Crea tu cuenta una única vez y cónectate a todos los servicios!
            </p>
          </div>
        </header>
      </section>
      <div className="cardSignup">
        <div className="card75">
          <CardAuth title={"Registrarse"} action={ACTIONS.SIGNUP} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
