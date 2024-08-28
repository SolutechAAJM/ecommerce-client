"use client";

import CardAuth from "../components/CardAuth";
import ReturnAuth from "../components/ReturnAuth";
import Image from "next/image";
import "../components/style/auth.css";
import NavBar from "@/components/NavBar";


const ACTIONS = {
  LOGIN: "login",
  SIGNUP: "signup",
};

const Login = () => {

  return (
    <>
    <NavBar></NavBar>
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
          <CardAuth title={"Iniciar sesión"} action={ACTIONS.LOGIN} />
        </div>
      </section>
    </>
  );
};

export default Login;
