import { useState } from "react";
import axios from "axios";
import {postResponse} from '@/app/services/api/index';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { useRouter } from "next/navigation";
import { GoogleLogo } from "phosphor-react";
import Button from '../../../components/Button';

import { useLanguage } from "@/context/LanguageContext";
import { ACTIONS } from "./Actions";


const CardAuth = ({ title, action }) => {

  const { l } = useLanguage();
  //New
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fullname = "Zlatan"; 
  const createdAt = new Date().toISOString().split('T')[0];
  const address = "Madellín"; 
  const phone = "3003002211"; 
  const isActive = true;
  const creditPoints = 0;
  const role = "user"

  const validEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const validateForm = () =>{
    if(!email || !password){
      toast.error("Por favor, completa todos los campos.")
      return false
    }
    if(!validEmail(email)){
      toast.error("Por favor, ingrese un correo válido.")
      return false
    }
    return true
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    if(!validateForm()){return}

    try {
      const response = await postResponse('auth/login', {email, password})

      if(response.data && response.data.body.token){
        const token = response.data.token;      
        localStorage.setItem('token', token) 

        toast.success(response.data.message)      
        router.push('/landing')
      } else {
        const errorMessage = response.data.message
        toast.error(errorMessage);
      }
      
    } catch (error) {
      console.error('Error en el proceso de inicio de sesión', error)

      if(error.response){
        const errorMessage = error.response.data.message || 'Error inesperado.'
        toast.error(errorMessage)
      } else {
        toast.error('Error en el proceso, por favor intenta nuevamente.')
      }
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    if(!validateForm()){return}

    try {
      const response = await postResponse('auth/register', {
        fullName: fullname,
        email: email, 
        password: password,
        createdAt: createdAt,
        address: address,
        phone: phone,
        isActive: isActive,
        creditPoints: creditPoints,
        role: role
      })  
      
      if(response.status === 201) {
        const token = response.data.token;      
        localStorage.setItem('token', token) 
        toast.success(response.data.message)   
      }

      if(response.status === 400) {
        toast.error(response.data.message.message[0]);
        return
      }

    } catch (error) {
      toast.error('Error en el proceso de registro');
    }
  }


  return (
    <div className="cardAuth">
      <h1>{title ?? "N/A "}</h1>
      <form className="form" onSubmit={action === ACTIONS.LOGIN ? handleLogin : handleRegister}>
        <div>
          <p>{l("login.email")}</p>
          <input 
           type="text" 
           placeholder={l("login.email")} 
           value={email}
           onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p>{l("login.password")}</p>
          <input 
           type="password" 
           placeholder={l("login.password")}
           value={password}
           onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <div className="buttonAuth" onClick={action === ACTIONS.LOGIN ? handleLogin : handleRegister}>
          <Button title={action === ACTIONS.LOGIN ? l("login.next") : l("signup.register")} type="submit"/>
        </div>
      </form>
      
      <div className="separation">
        <hr />
        <p>O</p>
        <hr />
      </div>
      <GoogleLogo className="googleIcon" size={32} />
      {action === ACTIONS.LOGIN ? (
        <>
          <p>{l("signup.createAccountInvitation")}</p>
          <div className="buttonAuth" onClick={() => window.location.href = "/signup"}>
            <Button title={l("signup.register")}/>
          </div>
        </>
      ) : (
        <p>{l('login.alreadyHaveAccount')} <a href="/login">{l("login.login")}</a></p>
      )}
      <ToastContainer />
    </div>
  );
};

export default CardAuth;
