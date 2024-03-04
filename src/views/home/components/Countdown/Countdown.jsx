// src/Countdown.js
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./Countdown.css";

const Countdown = ({ targetDate, title }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeUnit = () => {
    switch (title.toLowerCase()) {
      case "days":
        return timeLeft.days;
      case "hours":
        return timeLeft.hours;
      case "minutes":
        return timeLeft.minutes;
      case "seconds":
        return timeLeft.seconds;
      default:
        return 0;
    }
  };

  const timeout = getTimeUnit() < 0 ? "0" : getTimeUnit().toString().padStart(2, "0");

  return (
    <div
      // animate={{ borderRadius: ["50%", "40%", "50%"] }}
      // transition={{
      //   duration: 1,
      //   repeat: Infinity,
      //   ease: "easeInOut",
      // }}
      // animate={{
      //   scale: [1, 2, 2, 1, 1],
      //   rotate: [0, 0, 180, 180, 0],
      //   borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      // }}
      // transition={{
      //   duration: 2,
      //   ease: "easeInOut",
      //   times: [0, 0.2, 0.5, 0.8, 1],
      //   repeat: Infinity,
      //   repeatDelay: 1
      // }}
      className="countdown-item"
    >
      <motion.div
        animate={{ borderRadius: ["50%", "45%", "50%"] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="countdown-circle"
      >
        <p className="font-orbitron">{timeout}</p>
      </motion.div>
      <div className="countdown-title font-inversionz  uppercase text-2xl md:text-3xl">
        {title}
      </div>
    </div>
  );
};

export default Countdown;
