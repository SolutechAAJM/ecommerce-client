"use client";

import CardAuth from "../components/CardAuth";
import ReturnAuth from "../components/ReturnAuth";
import Image from "next/image";
import "../components/style/auth.css";

const Login = () => {
  return (
    <>
      <div className="logoReturn">
        <ReturnAuth />
        <Image className="logo" src="/Logo.png" alt="logo" width={150} height={130} />
      </div>
      <div className="cardLogin">
        <CardAuth title={"Iniciar sesión"} action={"agsgas"} />
      </div>
    </>
  );
};

export default Login;
