import ProjectCard from "@/components/projects/project_card";

export default function Projects() {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center w-full px-10">
            <div className="divider pb-5">
                <p className="text-4xl font-bold">
                    Projets personnels
                </p>
            </div>
            <div className="w-full max-w-5xl py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ProjectCard title="Portfolio" img="/projects/portfolio-screen.png" link="https://github.com/ToMaTo1206/portfolio-next">
                        Site portfolio me présentant moi, mon parcours, mes réalisations et mes outils
                    </ProjectCard>
                    <ProjectCard title="FoodSaver" img="/projects/foodSaver.png" link="https://github.com/ToMaTo1206/symplynote-screen">
                        Site web anti-gaspillage permettant de gérer son inventaire alimentaire et d'être alerté des aliments arrivant à expiration.
                    </ProjectCard>
                </div>
            </div>
            <div className="divider py-5">
                <p className="text-4xl font-bold">
                    Projets universitaires
                </p>
            </div>
            <div className="w-full max-w-5xl py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ProjectCard title="Colive" img="/projects/colive.png" link="https://github.com/ToMaTo1206/Colive.git">
                        Site de colocation entre étudiant
                    </ProjectCard>
                    <ProjectCard title="Steam Game Crud" img="/projects/game_crud.png" link="https://github.com/ToMaTo1206/Colive.git">
                        Site de colocation entre étudiant
                    </ProjectCard>
                </div>
            </div>
        </div>
    )
}