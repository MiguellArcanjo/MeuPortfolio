import "./page.css"
import { Nav } from "@/components/Nav/nav";
import { Introduciton } from "@/components/Introduction/Introduction";

export default function Home() {
  return (
    <div className="">
      <header>
        <Nav />
      </header>

      <main>
        <Introduciton />
      </main>
    </div>
  );
}
