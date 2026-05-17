import Header from "@/components/header/Header"
import Hero from "@/components/hero/Hero";
import Career from "@/components/career/career";

export default function Home() {
  return (
      <main className="flex flex-col">
          <Header/>
          <Hero/>
          <Career/>
      </main>
  );
}