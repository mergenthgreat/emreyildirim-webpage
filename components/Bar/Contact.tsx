import { CONF } from "../../libs/config";
import Head from "next/head";
import { FC } from "react";
import { About } from "./About";
import Tippy from '@tippyjs/react'
import Link from "next/link";

export const Contact :FC<IContactProps> = ({ title, link, icon, content}) =>{
    const Icon = icon;
    return (
            <Link href={link}>
                <div className="flex items-center py-1">
                    <Icon className="text-white w-6 h-6"/>
                    <h1 className="text-white text-lg font-medium px-1">{content}</h1>
                </div>
            </Link>
    )
}