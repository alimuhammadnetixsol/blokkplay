import Hero from "@/components/Hero/Hero";
import MostPlayedGames from "@/components/MostPlayedGames";
import VedioComponent from "@/components/VedioComponent";
export default function Home() {
  return (
   <>
    <div className="">
    <Hero />
      <VedioComponent/>
      <MostPlayedGames/>
    </div>
   </>
  );
}
