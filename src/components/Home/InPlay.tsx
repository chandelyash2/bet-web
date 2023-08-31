import { PlayLayout } from "./PlayLayout";
import Image from "next/image";
const upcomingCricketData = [
  {
    teamA: "India",
    teamB: "Australia",
    odds: {
      a: "2",
      b: "3",
    },
  },
  {
    teamA: "Afghanistan",
    teamB: "Bangladesh",
    odds: {
      a: "1.2",
      b: "3.4",
    },
  },
];
const badminton = [
  {
    teamA: "Zhu",
    teamB: "Stefarno",
    odds: {
      a: "1.7",
      b: "2.6",
    },
  },
];
export const InPlay = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2 border-b-2 border-orange-600 p-2">
        <Image src="/img/play.png" width={25} height={20} alt="play" />
        <h2 className="text-xl font-bold">InPlay</h2>
      </div>
      <PlayLayout
        label="InPlay"
        img="/img/cricket.png"
        list={upcomingCricketData}
      />
      <PlayLayout label="InPlay" img="/img/tennis.png" list={badminton} />
      <PlayLayout
        label="InPlay"
        img="/img/cricket.png"
        list={upcomingCricketData}
      />
      <PlayLayout
        label="InPlay"
        img="/img/cricket.png"
        list={upcomingCricketData}
      />
    </div>
  );
};
