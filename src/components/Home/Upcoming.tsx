import { PlayLayout } from "./PlayLayout";
import Image from "next/image";
const upcomingCricketData = [
  {
    teamA: "England",
    teamB: "Austria",
    odds: {
      a: "2",
      b: "3",
    },
  },
  {
    teamA: "South Africa",
    teamB: "Newzeland",
    odds: {
      a: "1.2",
      b: "3.4",
    },
  },
];
const badminton = [
  {
    teamA: "Andres Martin",
    teamB: "Ivan Gakhov",
    odds: {
      a: "1.2",
      b: "3.4",
    },
  },
];
export const Upcoming = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2 border-b-2 border-orange-600 p-2">
        <Image src="/img/upcoming.png" width={30} height={30} alt="play" />
        <h2 className="text-xl font-bold">Upcoming</h2>
      </div>
      <PlayLayout  event={upcomingCricketData} />
      <PlayLayout  event={badminton} />
    </div>
  );
};
