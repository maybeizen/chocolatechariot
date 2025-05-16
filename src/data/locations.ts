import { Location } from "../types";

export const locations: Location[] = [
  {
    id: "monticello-downtown",
    name: "Downtown Monticello",
    address: "Main & Broadway, Monticello, IN",
    hours: "11:00 AM – 2:00 PM",
    days: ["Tuesday", "Wednesday", "Thursday", "Friday"],
  },
  {
    id: "highschool-events",
    name: "High School Sports Events",
    address: "Various school campuses – check socials for updates",
    hours: "4:00 PM – 6:00 PM",
    days: ["Tuesday", "Friday"],
  },
  {
    id: "delphi-market",
    name: "Delphi Farmers Market",
    address: "Courthouse Square, Delphi, IN",
    hours: "12:00 PM – 5:00 PM",
    days: ["Saturday"],
  },
  {
    id: "community-events",
    name: "Local Community Events",
    address: "Rotating locations – fairs, festivals, and fundraisers",
    hours: "Varies by event",
    days: ["Saturday", "Sunday"],
  },
];
