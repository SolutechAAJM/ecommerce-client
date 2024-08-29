"use client";

import CardAuth from "../components/CardAuth";
import ReturnAuth from "../components/ReturnAuth";
import Image from "next/image";
import "../components/style/auth.css";
import NavBar from "@/components/NavBar";
import { useLanguage } from "@/context/LanguageContext";
import { ACTIONS } from "../components/Actions";


const Login = () => {

  const { l } = useLanguage();

  return (
    <>
    <NavBar></NavBar>
      <section className="logoReturn">
        {/* <ReturnAuth />
        <Image
          className="logo"
          src="/Logo.png"
          alt="logo"
          width={130}
          height={110}
        /> */}
      </section>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <section className="cardLogin">
        <div className="card25">
          <CardAuth title={l("login.title")} action={ACTIONS.LOGIN} />
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
       <br /> <br />
       <br />
       <br />
       
    </>
  );
};

export default Login;
