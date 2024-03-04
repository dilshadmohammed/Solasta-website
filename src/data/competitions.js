import mehendi from "../assets/images/competitions/mehendi.jpeg";
import face from "../assets/images/competitions/face.jpeg";
import mirror from "../assets/images/competitions/mirror.jpeg";
import dance from "../assets/images/competitions/spotdance.jpeg";
import light from "../assets/images/competitions/lightmusic.jpeg";
import mappila from "../assets/images/mappila.jpeg";
import photography from "../assets/images/competitions/photography.jpeg";
import standup from "../assets/images/competitions/standup.jpeg";
import mrkarma from "../assets/images/competitions/Mr&mrs.jpeg";

const competitions = [
  {
    id: "spotdance",
    title: "Spot Dance",
    dateTime: "02 MARCH 2024, 2 PM - 4 PM",
    description: ["Individual Participation"],
    venue: "Main Stage",
    image: dance,
    fee: 49,
    prize: "1st Prize: ₹3000",
    registerLink: "https://rzp.io/l/5MBBvgK",
  },
  {
    id: "facepainting",
    title: "Face painting",
    dateTime: "01 MARCH 2024, 2 PM - 3 PM",
    venue: "Indoor",
    image: face,
    description: ["Individual Participation"],
    fee: 49,
    registerLink: "https://rzp.io/l/XL6Nn95w",
    prize: "1st Prize: ₹1500",
  },
  {
    id: "mehendi",
    title: "Mehendi",
    dateTime: "02 MARCH 2024, 1 PM - 2 PM",
    venue: "Indoor",
    image: mehendi,
    description: ["Individual Participation"],
    fee: 49,
    registerLink: "https://rzp.io/l/5HXkSmy",

    prize: "1st Prize: ₹1000, 2nd Prize: prize worth ₹400",
  },
  {
    id: "mirror-dance",
    title: "Mirror Dance",
    dateTime: "02 MARCH 2024, 9 AM - 10 PM",
    venue: "Garden",
    image: mirror,
    description: ["Group of 2"],
    fee: 99,
    registerLink: "https://rzp.io/l/tuU537jIQF",

    prize: "1st Prize: ₹1000, 2nd Prize: prize worth ₹400",
  },
  {
    id: "light-music",
    title: "Light Music",
    dateTime: "02 MARCH 2024, 2 PM - 4 PM",
    venue: "Garden",
    image: light,
    fee: 49,
    registerLink: "https://rzp.io/l/9tzxi6KRo",

    prize: "1st Prize: ₹1000, 2nd Prize: prize worth ₹400",
  },
  {
    id: "sopt-photography",
    title: "Spot Photography ",
    dateTime: "02 MARCH 2024, 10 AM - 4 PM",
    image: photography,
    description: [],
    prize: "Prize: ₹2500",
    fee: 49,
    registerLink: "https://rzp.io/l/YxogSIWZqy",
  },
  {
    id: "stand-up-comedy",
    title: "Stand Up Comedy",
    dateTime: "",
    image: standup,
    description: [],
    prize: "1st Prize: ₹1000, 2nd Prize: prize worth ₹400",
    fee: 49,
    registerLink: "https://rzp.io/l/Kqrs3aQ9o",
  },
  {
    id: "mappila-pattu",
    title: "Mappila Pattu",
    dateTime: "",
    image: mappila,
    description: [],
    prize: "1st Prize: ₹1000, 2nd Prize: prize worth ₹400",
    fee: 49,
    registerLink: "https://rzp.io/l/77yZr7U",
  },
  {
    id: "mr-and-ms-karma",
    title: "Mr and Miss Karma",
    dateTime: "",
    image: mrkarma,
    description: [
      "Exclusivley for KMCT Students",
      "First round will be held on 27 Feb 2024",
    ],
    prize: "1st Prize: ₹5000",
    fee: 0,
    registerLink: "https://forms.gle/wX1NAgYtv1y7a13a6",
  },
];

export default competitions;
