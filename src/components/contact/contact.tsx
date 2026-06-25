import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    return (
        <div className="flex flex-col justify-center w-full px-10 py-5 pt-12 pb-20 scroll-mt-24" id={"contact"}>
            <div className="divider pb-5">
                <p className="text-4xl font-bold">
                    Contact
                </p>
            </div>

            <div className="text-center max-w-xl mx-auto flex flex-col items-center gap-6 pt-10">
                <p className="text-2xl font-semibold">
                    Vous souhaitez me contacter ?
                </p>
                <p className="text-base text-base-content/70">
                    Je suis à l'écoute pour de nouveaux projets et de nouvelles opportunités. N'hésitez pas à me joindre directement !
                </p>

                <div className="grid grid-flow-col gap-4">
                    <a href="mailto:thom84.1206@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/thomas-denoyelle-2198a42b9/">
                        <FontAwesomeIcon icon={faLinkedin} className="text-4xl" />
                    </a>
                    <a href="https://github.com/ToMaTo1206">
                        <FontAwesomeIcon icon={faGithub} className="text-4xl" />
                    </a>
                </div>
            </div>
        </div>
    )
}