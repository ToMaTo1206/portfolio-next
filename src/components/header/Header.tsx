import Image from "next/image"
import Link from "next/link"
import {faContactCard, faCubes, faDiagramProject, faHouseUser, faRoute} from "@fortawesome/free-solid-svg-icons"
import NavLinkIcon from "@/components/header/NavLinkIcon";
import NavLink from "@/components/header/NavLink";

/**
 * Header du portfolio
 */
export default function Header() {
    return (
        <header className="navbar bg-secondary/85 backdrop-blur-md z-50 shadow-xl md:px-12 sticky top-0">
            <div className="navbar-start">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                    <Image
                        src="/profil/td_logo.svg"
                        width={50}
                        height={50}
                        alt="Logo du site"
                    />
                </Link>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal flex md:hidden">
                    <NavLinkIcon href={"#"} tooltip={"Page d'accueuil"} faIcon={faHouseUser} />
                    <NavLinkIcon href={"#"} tooltip={"Parcours"} faIcon={faRoute} />
                    <NavLinkIcon href={"#"} tooltip={"Projets"} faIcon={faDiagramProject} />
                    <NavLinkIcon href={"#"} tooltip={"Stack technique"} faIcon={faCubes} />
                    <NavLinkIcon href={"#"} tooltip={"Contact"} faIcon={faContactCard} />
                </ul>
                <ul className="menu menu-horizontal hidden md:flex">
                    <NavLink href={"#"}>Présentation</NavLink>
                    <NavLink href={"#"}>Parcours</NavLink>
                    <NavLink href={"#"}>Projets</NavLink>
                    <NavLink href={"#"}>Stack</NavLink>
                    <NavLink href={"#"}>Contact</NavLink>
                </ul>
            </div>
        </header>
    )
}