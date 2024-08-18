'use client';
import { useRouter } from "next/navigation";
import Login from "../(auth)/login/page";

export const HomePage = () => {

    const router = useRouter();

    const ongo = () => {
        router.push('login')
    }
 return (
    <>
    <Login></Login>
    </>
 )
}

export default HomePage;