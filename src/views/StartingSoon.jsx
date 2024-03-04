import { useEffect } from "react";

const StartingSoon = () => {
  useEffect(() => {
    window.document.title = "Please Stand By | KARMA'24";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-56 px-4">
      <h1 className="text-7xl sm:text-8xl font-retroTeam uppercase text-center">
        Registration Closed
      </h1>
      <p className="text-4xl sm:text-5xl font-orbitron uppercase text-center">
        Please Stand By
      </p>
    </div>
  );
};

export default StartingSoon;
