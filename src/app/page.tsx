import Header from "@/components/header/Header"
import Hero from "@/components/hero/Hero";
import Career from "@/components/career/career";

export default function Home() {
  return (
      <main className="flex flex-col">
          <Header/>
          <Hero/>
          <div className="divider px-10">
              <p className="text-4xl font-bold">
                  Parcours
              </p>
          </div>
          <Career/>
      </main>
  );
}