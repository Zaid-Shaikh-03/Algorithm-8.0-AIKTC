import {
  airbnb,
  binance,
  coinbase,
  dropbox,
  one,
  two,
  three,
  four,
  web_development,
  app_development,
  Machine_Learning,
  blockchain
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Develoment",
    icon: web_development,
  },
  {
    title: "App Development",
    icon: app_development,
  },
  {
    title: "Machine Learning",
    icon: Machine_Learning,
  },
  {
    title: "blockchain technology",
    icon: blockchain,
  },
];


const experiences = [
  {
    title: "Event Registration",
    icon: one,
    iconBg: "#383E56",
    date: "13th Feb 2024 - 20th Feb 2024",
    points: [
      "Participants have to register themselves and form a team of 4 members.",
    ],
  },
  {
    title: "Problem statement announcement",
    icon: two,
    iconBg: "#E6DEDD",
    date: "1st March 2024",
    points: [
      "Problem statements will be announce and team leader has to select on topic and start work on it.",
    ],
  },
  {
    title: "Team Reporting Day",
    icon: three,
    iconBg: "#383E56",
    date: "3rd March 2024",
    points: [
      "Each team has to report to AIKTC CAMPUS at 9:00 AM IST to 10:00 AM IST.",
    ],
  },
  {
    title: "Winner Announcement",
    icon: four,
    iconBg: "#E6DEDD",
    date: "4th March 2024",
    points: [
      "Winner will be announce.",
    ],
  },
];


export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export { services, experiences };
