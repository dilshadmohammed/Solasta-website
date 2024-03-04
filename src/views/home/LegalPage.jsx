import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import legalPages from "../../data/legal";

const LegalPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const { slug } = useParams();
  const navigate = useNavigate();

  const page = legalPages[slug];

  if (!page) navigate("/not-found");

  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">{page.title}</h1>
      {page.desc.map((e) => (
        <p className="py-2 text-lg">{e}</p>
      ))}
    </div>
  );
};

export default LegalPage;
