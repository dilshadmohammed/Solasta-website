import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import FilledButton from "../components/FilledButton";

import events from "../data/events";
const EventDetailsView = () => {
  const { id } = useParams();

  const item = events.find((e) => e.id === id);

  const handleRegisterClick = () => {
    if (item.registerLink) {
      window.open(item.registerLink, "_blank");
    } else {
      alert("Registration will start Soon!");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto max-w-screen-xl py-20 px-4">
      <div className="flex justify-center md:justify-between flex-wrap-reverse gap-8 items-center">
        <div>
          <h1 className="text-karma-blue font-Valorax text-4xl md:text-6xl">
            {item.title}
          </h1>
          <br />
          <p className="text-lg font-orbitron tracking-wide leading-8">
            {item.dateTime} <br />
            {item.description ? item.description.map((desc) => <p>{desc}</p>) : null}
          </p>
          <p className="font-bold font-orbitron text-xl md:text-3xl mt-4 text-karma-green">
            {item.prizes && item.prizes.map((prize)=> <p>{prize}</p>)}
          </p>
          <p className="font-bold font-orbitron text-2xl mt-4">{item.fee ? `Fee: ₹${item.fee}` : "Free"}</p>
          <FilledButton text="REGISTER" onClick={handleRegisterClick} />
        </div>
        <img src={item.image} alt="" className="h-72 md:h-[500px] rounded-xl" />
      </div>
    </div>
  );
};

export default EventDetailsView;
