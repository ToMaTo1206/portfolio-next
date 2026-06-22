import Header from "@/components/header/Header"
import Hero from "@/components/hero/Hero";
import Career from "@/components/career/career";
import Projects from "@/components/projects/projects";
import Stack from "@/components/stack/stack";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
      <main className="flex flex-col">
          <Header/>
          <Hero/>
          <div className="divider px-10 scroll-mt-24" id={"parcours"}>
              <p className="text-4xl font-bold">
                  Parcours
              </p>
          </div>
          <Career/>
          <Projects/>
          <Stack/>
          <Footer/>
      </main>
  );
}