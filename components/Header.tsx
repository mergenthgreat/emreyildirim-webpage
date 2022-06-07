import Head from "next/head";
import { FC } from "react";

export const Header :FC<IHeaderProps> = ({ title }) =>{
    return (
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
            <title>{title}</title>
        </Head>
    )
}