import Image from "next/image";
import Link from "next/link";

type ProjectsProps = {
    title: string;
    img: string;
    link: string;
    children?: React.ReactNode;
}

export default function ProjectCard({title, img, link, children}: ProjectsProps) {
    return (
        <div className="card shadow-lg rounded-lg bg-base-100/60 overflow-hidden">
            <div className="card-body p-6">
                <h1 className="card-title font-poppins text-3xl">
                    {title}
                </h1>
            </div>
            <div className="group relative w-full aspect-video border-t border-primary/10">
                <Image
                    src={img}
                    alt={title}
                    width={1280}
                    height={720}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div
                    className="absolute inset-0 flex flex-col p-6 justify-end bg-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                    <div
                        className="translate-y-4 space-y-2 transition-transform duration-300 group-hover:translate-y-0"
                    >
                        <p className="text-white">{children}</p>
                        <div className="text-xl font-bold text-white"><Link href={link}>
                            Voir sur Github
                        </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}