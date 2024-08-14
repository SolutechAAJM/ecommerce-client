'use client';
import { useRouter } from "next/navigation";

export const HomePage = () => {

    const router = useRouter();

    const ongo = () => {
        router.push('login')
    }
 return (
    <>
    hola soy homre
    <button onClick={ongo}> irrrrr</button>
    </>
 )
}

export default HomePage;