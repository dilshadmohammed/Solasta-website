import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    window.document.title = "Not Found | KARMA'24";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-7xl sm:text-8xl font-orbitron uppercase text-center">
        <p>Oops!</p>
        <p>Wrong Turn.</p>
      </h1>
    </div>
  );
};

export default NotFound;
