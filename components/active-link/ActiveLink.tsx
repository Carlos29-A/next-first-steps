"use client"


import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
    path: string
    text: string
}


export const ActiveLink = ({ path, text}: Props) => {

    const pathname = usePathname();
    

    return (
        <Link key={path} className={`hover:underline hover:text-blue-400 mr-2 transition-all ${(pathname === path) && 'text-blue-400'}`} href={path}>{text}</Link>
    )
}
