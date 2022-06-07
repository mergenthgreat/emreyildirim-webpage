import { CONF } from "../../libs/config";
import Head from "next/head";
import { FC } from "react";
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { Contact } from "./Contact";

export const About :FC = () =>{
    return (
        <div>
            <div className="flex">
                <img src={CONF.image} className="rounded-lg w-96 h-96 hover:scale-105 transition-all"  />
                <div className="mx-12 my-2">
                    <img src="https://cdn.discordapp.com/attachments/982588741782749244/982612852957405215/unknown.png" className="w-full h-4" />
                    <div className="my-6">
                     <p className="text-lg text-pink-600">Name:</p>
                        <div className="py-4">
                            <h1 className="text-white text-3xl font-bold px-1">Emre Yıldırım</h1>
                            <h1 className="text-gray-300 text-xl">Game Developer</h1>
                        </div>
                    <img src="https://cdn.discordapp.com/attachments/982588741782749244/982612852957405215/unknown.png" className="w-full h-4 my-2" />
                    <p className="text-lg text-blue-400 my-4">Contact İnfo:</p>
                        <div className="flex flex-col">
                            {CONF.contact.map((r: IContactProps, index: number) => (
                                <Contact key={index} title={r.title} link={r.link} icon={r.icon} content={r.content} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}