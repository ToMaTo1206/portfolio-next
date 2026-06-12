import StackCard from "@/components/stack/stack_card";
import {
    faBootstrap, faCss3,
    faDocker,
    faGithub, faGitlab, faHtml5, faJs,
    faLinux, faNodeJs,
    faPhp, faReact, faSymfony,
    faTailwindCss,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faCube, faDatabase, faTerminal,} from "@fortawesome/free-solid-svg-icons";

export default function Stack() {
    return(
        <div className="flex flex-col justify-center w-full px-10 py-5">
            <div className="divider pb-5">
                <p className="text-4xl font-bold">
                    Stack technique
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 py-4 gap-5">
                <div className="card bg-base-100/70 shadow-2xl flex grow ps-5 rounded-md py-2">
                    <h1 className="text-2xl font-bold pt-2">
                        Front-End
                    </h1>
                    <div className="flex flex-wrap gap-2 py-3">
                        <StackCard faIcon={faHtml5}>Html</StackCard>
                        <StackCard faIcon={faCss3}>Css</StackCard>
                        <StackCard faIcon={faJs}>Javascript</StackCard>
                        <StackCard faIcon={faReact}>React</StackCard>
                        <StackCard faIcon={faBootstrap}>Bootstrap</StackCard>
                        <StackCard faIcon={faTailwindCss}>Tailwind</StackCard>
                    </div>
                </div>
                <div className="card bg-base-100/70 shadow-2xl flex grow ps-5 rounded-md py-2">
                    <h1 className="text-2xl font-bold pt-2">
                        Back-End
                    </h1>
                    <div className="flex flex-wrap gap-2 py-3">
                        <StackCard faIcon={faPhp}>PHP</StackCard>
                        <StackCard faIcon={faSymfony}>Symfony</StackCard>
                        <StackCard faIcon={faNodeJs}>NodeJs</StackCard>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4 gap-5">
                <div className="card bg-base-100/70 shadow-2xl flex grow ps-5 rounded-md py-2">
                    <h1 className="text-2xl font-bold pt-2">
                        Outils
                    </h1>
                    <div className="flex flex-wrap gap-2 py-3">
                        <StackCard faIcon={faDocker}>Docker</StackCard>
                        <StackCard faIcon={faGithub}>Github</StackCard>
                        <StackCard faIcon={faGitlab}>GitLab</StackCard>
                        <StackCard faIcon={faLinux}>Linux</StackCard>
                        <StackCard faIcon={faCode}>VsCode</StackCard>
                        <StackCard faIcon={faTerminal}>PhpStorm</StackCard>
                    </div>
                </div>
                <div className="card bg-base-100/70 shadow-2xl flex grow ps-5 rounded-md py-2">
                    <h1 className="text-2xl font-bold pt-2">
                        Base de données
                    </h1>
                    <div className="flex flex-wrap gap-2 py-3">
                        <StackCard faIcon={faDatabase}>MySQL / PostgreSQL</StackCard>
                        <StackCard faIcon={faCube}>Doctrine</StackCard>
                    </div>
                </div>
            </div>
        </div>
    )
}