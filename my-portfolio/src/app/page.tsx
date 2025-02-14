import "./page.css"
import { Nav } from "@/components/Nav/nav";
import { Introduciton } from "@/components/Introduction/Introduction";
import { AboutMe } from "@/components/AboutMe/aboutMe";

export default function Home() {
  return (
    <div className="">
      <header>
        <Nav />
      </header>

      <main>
        <Introduciton />
        <AboutMe />
      </main>
    </div>
  );
}
