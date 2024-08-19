"use client";

import CardAuth from "../components/CardAuth";
import ReturnAuth from "../components/ReturnAuth";
import Image from "next/image";
import "../components/style/auth.css";

const Login = () => {
  return (
    <>
      <section className="logoReturn">
        <ReturnAuth />
        <Image
          className="logo"
          src="/Logo.png"
          alt="logo"
          width={130}
          height={110}
        />
      </section>
      <section className="cardLogin">
        <div className="card25">
          <CardAuth title={"Iniciar sesión"} action={"agsgas"} />
        </div>
      </section>
    </>
  );
};

export default Login;
