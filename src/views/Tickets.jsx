import { useEffect } from "react";
import FilledButton from "../components/FilledButton";

const Tickets = () => {
  useEffect(() => {
    window.document.title = "Tickets | KARMA'24";
    window.scrollTo(0, 0);
  }, []);

  const ticketOptions = [
    {
      title: "Day 2",
      price: "₹200",
      description: ["Early bird tickets for the first 100 participants"],
      bg: "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      paymentUrl: "https://rzp.io/l/OgbD0dZR",
    },
    {
      title: "Day 3",
      price: "₹300",
      description: [
        "Regular tickets for the next 100 participants",
        "Regular tickets for the next 100 participants",
      ],
      bg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Fmusic-people-night-eiffel-tower-crowd-concert-audience-romantic-stage-performance-crowded-visitor-rock-concert-musical-theatre-858401.jpg&f=1&nofb=1&ipt=9df7194a64946c087e2e3163b0fb17afb2d1059a8b6e1f8dd664ddbd205ae4c0&ipo=images",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      paymentUrl: "https://rzp.io/l/q8dJZN2IWc",
    },
    {
      title: "Combo",
      price: "₹450",
      description: ["Late bird tickets for the last 100 participants"],
      bg: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      paymentUrl: "https://rzp.io/l/ccbxxNIwi",
    },
  ];

  return (
    <div className="container mx-auto max-w-screen-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center py-20 lg:py-44 px-8">
        {ticketOptions.map((option, index) => (
          <div
            key={index}
            className={`grdient-shadow-box relative p-8 rounded-sm flex flex-col justify-between text-center h-80 border border-gray-600 -skew-x-6 ${
              index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
            style={{
              // backgroundImage: `url(${option.bg})`,
              background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${option.bg}) no-repeat center center/cover`,
              backgroundSize: "cover",
            }}
          >
            {/* <div className="flex justify-between items-center"> */}
            <h2 className="text-5xl font-bold font-retroTeam">{option.title}</h2>
            <p className="text-5xl font-bold font-retroTeam text-karma-green">
              {option.price}
            </p>
            {/* </div> */}
            {/* <ul className="text-left mt-4 list-disc">
              {option.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul> */}
            {/* <button className="bg-primary text-white py-2 rounded-md">Buy Now</button> */}
            <FilledButton
              text="Grab Now"
              className="mt-4"
              onClick={() => window.open(option.paymentUrl)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
