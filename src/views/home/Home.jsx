import Hero from "./components/Hero/Hero";
import AmbassadorsSection from "./components/Ambassadors/Ambassadors";
import WorkshopsSection from "./components/Workshops/Workshops";
import EventsSection from "./components/Events/EventsSection";
import GamesSection from "./components/Games/GamesSection";
import SpotLight from "./components/SpotLight";
import { useEffect } from "react";
import CompetitionsSection from "./components/Games/CompetitionsSection";

const Home = () => {
  useEffect(() => {
    window.document.title = "KARMA'24";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <AmbassadorsSection />
      <EventsSection />
      <WorkshopsSection />
      <CompetitionsSection />
      <GamesSection />
      <SpotLight />
    </>
  );
};

export default Home;
