import Image from "next/image";
type comingData = {
  teamA: string;
  teamB: string;
  odds: {
    a: string;
    b: string;
  };
};

interface PlayLayoutProps {
  img: string;
  label: string;
  list: comingData[];
}
export const PlayLayout = ({ img, label, list }: PlayLayoutProps) => {
  return (
    <div>
      <div className="relative">
        <div className="w-full flex bg-secondary p-2 px-4 rounded-lg before:content-[''] before:absolute before:right-0 before:w-[55%] before:top-0 before:h-[100%] before:bg-primary before:rounded-r-lg">
          <div className="flex gap-2 flex-[1.5]">
            <Image src={img} width={20} height={20} alt="inplay" />
            <h1 className="font-bold">{label}</h1>
          </div>
          <div className="flex z-[999] flex-[1.5] justify-between">
            <span>1</span>
            <span>x</span>
            <span>2</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-b-lg">
        {list.map((item) => (
          <div
            className="flex text-primary items-center p-2 px-4 border-t"
            key={item.teamA}
          >
            <div className="flex-col flex-[1.5] font-bold">
              <h2>{item.teamA}</h2>
              <h2>{item.teamB}</h2>
            </div>
            <div className="flex z-[999] flex-[1.5] justify-between">
              <span>{item.odds.a}</span>
              <span>x</span>
              <span>{item.odds.b}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
