import Link from "next/link";
import React, {JSX} from "react";

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
}

/**
 * Liens de navigation qui apparaitront sur moyen et grand écran
 */
export default function NavLink({ href, children}: NavLinkProps): JSX.Element {
    return(
        <li>
            <Link href={href} className="hover:bg-transparent text-base hover:skeleton-text hover:skeleton hover:scale-95 transition-transform duration-300">
                {children}
            </Link>
        </li>
        )

}