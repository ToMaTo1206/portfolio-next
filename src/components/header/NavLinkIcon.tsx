import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React, {JSX} from "react";

type NavLinkProps = {
    href: string;
    tooltip: string;
    faIcon: IconDefinition;
}

/**
 * Liens de navigation qui apparaitront sur petit écran avec leur icon
 */
export default function NavLinkIcon({ href, tooltip, faIcon}: NavLinkProps): JSX.Element {
    return(
        <li>
            <div className="tooltip tooltip-left tooltip-primary hover:bg-transparent hover:text-secondary-content hover:scale-90 transition-transform duration-300"
                 data-tip={tooltip}>
                <Link href={href}>
                    <FontAwesomeIcon icon={faIcon} size="2x" />
                </Link>
            </div>
        </li>
        )

}