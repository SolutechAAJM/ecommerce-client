"use client";

import CardAuth from "../components/CardAuth";
import ReturnAuth from "../components/ReturnAuth";
import Image from "next/image";
import "../components/style/auth.css";

import { useLanguage } from "@/context/LanguageContext";

const ACTIONS = {
  LOGIN: "login",
  SIGNUP: "signup",
};

const Signup = () => {
  const {l} = useLanguage();

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
            <h1>{l("signup.createAccount")}</h1>
            <p>
              {l("signup.createAccountDescription")}
            </p>
          </div>
        </header>
      </section>
      <div className="returnSection">
        <ReturnAuth />
      </div>
      <div className="cardSignup">
        <div className="card75">
          <CardAuth title={"Registrarse"} action={ACTIONS.SIGNUP} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
