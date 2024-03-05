import Hero from "./components/Hero/Hero";
import WorkshopsSection from "./components/Workshops/Workshops";
import EventsSection from "./components/Events/EventsSection";
import { useEffect } from "react";


const Home = () => {
  useEffect(() => {
    window.document.title = "KARMA'24";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <EventsSection />
      <WorkshopsSection />
    </>
  );
};

export default Home;
