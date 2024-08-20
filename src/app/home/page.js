'use client';
import { useRouter } from "next/navigation";
import Login from "../(auth)/login/page";
import Signup from "../(auth)/signup/page";

export const HomePage = () => {

    const router = useRouter();

    const ongo = () => {
        router.push('login')
    }
 return (
    <>
    <Signup></Signup>
    </>
 )
}

export default HomePage;