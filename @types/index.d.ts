import { ReactNode } from "react";
import { IconType } from "react-icons";

export {}

declare global {
    interface IHeaderProps {
        title: string;
    }
    interface IContactProps {
        title: string;
        link: string;
        icon: IconType;
        content: string;
    }
    interface ITippyProps {
        title : string;
        children: ReactNode;
    }
}