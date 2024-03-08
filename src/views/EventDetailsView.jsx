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
      <div className="flex justify-between flex-wrap-reverse gap-8 mt-8 items-center">
        <div>
          <h1 className="text-karma-blue font-bold font-retroTeam text-5xl sm:text-7xl">
            {item.title}
          </h1>
          <p className="text-2xl font-retroTeam tracking-wide leading-8">
            {item.dateTime} <br />
            {item.description ? item.description.map((desc) => <p>{desc}</p>) : null}
          </p>
          <p className="font-bold font-retroTeam text-3xl mt-4 text-karma-green">
            {item.prize}
          </p>
          <p className="font-bold font-retroTeam text-2xl mt-4">Fee: ₹{item.fee}</p>
          <FilledButton text="REGISTER" onClick={handleRegisterClick} />
        </div>
        <img src={item.image} alt="" className="h-72 md:h-[500px] rounded-xl" />
      </div>
    </div>
  );
};

export default EventDetailsView;
