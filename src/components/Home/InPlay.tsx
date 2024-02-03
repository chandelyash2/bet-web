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

interface InPlayProps {
  data: any;
}
export const InPlay = ({ data }: InPlayProps) => {
  return (
    <div className="flex flex-col gap-6">
      {data?.map((event:any) => (
        <PlayLayout key={event.sportId} event={event} />
      ))}
    </div>
  );
};
