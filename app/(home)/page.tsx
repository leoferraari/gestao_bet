"use client"

import { RxAvatar } from "react-icons/rx";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";

const Home = () => {
    const handleLoginClick = () => signIn("google");

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <RxAvatar className="w-40 h-40 rounded-full mb-4"/> 
                <p className="text-center font-semibold">Olá, bem-vindo a Gestão BET!</p>
            </div>

            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-xs rounded-lg shadow-lg flex flex-col justify-center items-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center w-full" onClick={handleLoginClick}>
                    <FaGoogle/>
                    <span className="pl-[25%]">Login com Google</span>
                </button>
            </div>
        </div>
    )
}

export default Home;