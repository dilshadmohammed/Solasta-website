import Hero from "./components/Hero/Hero";
import EventsSection from "./components/Events/EventsSection";
import { useEffect } from "react";


const Home = () => {
  useEffect(() => {
    window.document.title = "SOLASTA";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <EventsSection />
    </>
  );
};

export default Home;
