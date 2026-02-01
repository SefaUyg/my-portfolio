"use client"

import Link from "next/link";
import { toast } from "react-hot-toast";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";

interface IContact {
    label: string;
    target: string;
}

export const Footer = () => {
    const shortcuts = [
        { href: "https://github.com/SefaUyg", label: "GitHub" },
        { href: "https://www.linkedin.com/in/sefa-uygun-1784aa223/", label: "LinkedIn" },
    ];

    const stacks = [
        { name: "Next.js ", logo: <SiNextdotjs className="text-white w-8 h-8" /> },
        { name: "TypeScript ", logo: <BiLogoTypescript className="text-white w-8 h-8" /> },
        { name: "Tailwind CSS ", logo: <BiLogoTailwindCss className="text-white w-8 h-8" /> }
    ];

    const contact = [
        { label: "Email", target: "dadasdad@sdadas.com" }
    ];

    const onHandleCopy = (contact: IContact) => {
        navigator.clipboard.writeText(contact.target);
        toast.success(`${contact.label} copied to ClipBoard!`, { style: { border: "1px solid #3e3e3e", background: "#111", color: "#fff" } });
    };

    const cv_file_url = "/pdf/Sefa-Uygun-CV.pdf";

    const downloadfile = (url: string) => {
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName ?? "CV");
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };
}