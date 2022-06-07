import { CONF } from "../../libs/config";
import Head from "next/head";
import { FC } from "react";
import { About } from "./About";
import { Skills } from "./Skills";

export const LeftBar :FC = () =>{
    return (
        <div className="w-full h-auto ">
            <About />
            <img src="https://cdn.discordapp.com/attachments/982588741782749244/982612852957405215/unknown.png" className="w-full h-4 my-4" />
            <Skills />
        </div>
    )
}