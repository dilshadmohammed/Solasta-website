import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import events from "../../../../data/events";

import EventCard from "./components/EventCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./EventsSection.css";

const EventsSection = () => {
  return (
    <>
      <div id="events" className="container max-w-screen-xl mx-auto pt-28 pb-16 px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ margin: "20px", amount: "all" }}
          className="mb-4 font-Valorax text-6xl text-cyan-300"
        >
          Events
        </motion.h2>
        <div className="swiper-container px-10 mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={40}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              980: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation]}
          >
            {events.map((event) => (
              <SwiperSlide key={event.id}>
                <EventCard event={event} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Navigation BUttons */}
          <div className="swiper-button-next">
          </div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </>
  );
};

export default EventsSection;
