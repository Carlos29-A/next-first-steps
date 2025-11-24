import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";


const navItems = [
    {path: '/about', text: 'About'},
    {path: '/pricing', text: 'Pricing'},
    {path: '/contact', text: 'Contact'}
]


export default function Navbar() {
  return (
    <nav className="flex bg-blue-800 p-2 m-2 rounded">
        <Link href={'/'}>
            Home
        </Link>
        <div className="flex flex-1"></div>

        {
            navItems.map( navItem => (
                <ActiveLink key={navItem.path} {...navItem}/>
            ))
        }

    </nav>
  )
}
