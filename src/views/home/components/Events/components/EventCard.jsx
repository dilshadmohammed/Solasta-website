import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={() => navigate(`/events/${event.id}`)}
      className="p-8 rounded-3xl mx-auto workshop-item"
      style={{
        backgroundImage: `url(${event.image1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    </motion.div>
  );
};

export default EventCard;
