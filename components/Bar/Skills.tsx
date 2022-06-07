import { CONF } from "../../libs/config";
import Head from "next/head";
import { FC } from "react";
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { Contact } from "./Contact";

export const Skills :FC = () =>{
    return (
        <div className="px-1">
         <div className="flex justify-between">
            <div className="max-w-md">
            <h1 className="text-2xl text-blue-500">About Me:</h1>
            <p className="text-xl text-gray-300">A game developer passionate about learning and teaching the <a className="border-b-2 border-gray-400 hover:border-gray-500 transition-all" href="https://www.unrealengine.com/en-US">Unreal Engine</a>.</p>
            </div>
            <div className="mr-2">
            <h1 className="text-2xl text-blue-500 mr-4">Skills:</h1>
            <p className="text-lg text-white">・intermediate blueprint knowledge</p>
            <p className="text-lg text-white">・entry level c++ knowledge</p>
            <p className="text-lg text-white">・Tutor of Unreal Engine</p>

            </div>
         </div>
        </div>
    )
}