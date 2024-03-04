import { useNavigate } from "react-router-dom";
import ambassador from "../../../../assets/images/money-box.jpg";

const AmbassadorsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="flex justify-between">
        <div className="flex gap-16 justify-center items-center mr-8 mt-20 ml-8">
          <div className="w-1/3 mx-auto hidden md:block">
            <img
              className="w-full mix-blend-screen scale-150"
              src={ambassador}
              alt="BOX"
            />
          </div>
          <div className="grid w-full md:w-2/3 place-items-center">
            <h1 className="text-5xl text-center font-bold bg-gradient-to-r from-[#A3FF36] to-[#C2FF7B] text-transparent bg-clip-text mb-4 leading-relaxed">
              Campus Ambassadors Program
            </h1>
            <p className="text-justify mt-4">
              KMCT College of Engineering presents Campus Ambassadorship Program as a part
              of Karma 2024! Represent your college for Karma and get an opportunity to
              increase your network and reach. Be a Campus Ambassador and refer students
              from your college to participate in our programs, workshops and events and
              stand a chance to win exciting prizes worth over 2k!
            </p>
            <button
              onClick={() => navigate("/signup")}
              className="bg-[#8EFF09] hover:bg-[#09D3FF] text-black font-bold text-lg py-2 px-10 tracking-wide rounded-xl place-items-center mt-8 "
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbassadorsSection;
