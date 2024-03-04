import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "./Workshops.css";

const WorkshopItem = ({ workshop }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={() => navigate(`/workshops/${workshop.id}`)}
      className="p-8 rounded-3xl mx-auto workshop-item max-w-xs"
      style={{
        backgroundImage: `url(${workshop.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <h3 className="text-karma-blue font-bold font-retroTeam text-3xl sm:text-4xl">
        {workshop.title}
      </h3>
    </motion.div>
  );
};

export default WorkshopItem;
