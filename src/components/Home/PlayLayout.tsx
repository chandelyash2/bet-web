
import { useRouter } from "next/router";
type comingData = {
  teamA: string;
  teamB: string;
  odds: {
    a: string;
    b: string;
  };
};

interface PlayLayoutProps {
  event: any;
}
export const PlayLayout = ({ event }: PlayLayoutProps) => {
  const router = useRouter();
  return (
    <div>
      <div className="relative">
        <div className="w-full flex bg-secondary p-2 px-4 rounded-lg before:content-[''] before:absolute before:right-0 before:w-[55%] before:top-0 before:h-[100%] before:bg-primary before:rounded-r-lg">
          <div className="flex gap-2 flex-[1.5]">
            {/* <Image src={img} width={20} height={20} alt="inplay" /> */}
            <h1 className="font-bold">{event.name}</h1>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-b-lg">
        {event?.dates?.map((item:any) => (
          <div
            className="flex text-primary items-center p-2 px-4 border-t cursor-pointer"
            key={item.id}
            onClick={() => {
              router.push({
                pathname: `/sports/${item.slug}`,
                query: {
                  sport: item.sport_id,
                  league: item.league_id,
                  event: item.id,
                },
              });
            }}
          >
            <div className="flex-col flex-[1.5] font-bold">
              <h2>{item.runners[0]}</h2>
              <h2>{item.runners[1]}</h2>
            </div>
            <div className="flex z-[999] flex-[1.5] justify-between">
              <span className="bg-blue-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer">
                {item?.data?.runners[0]?.ex?.availableToBack[0]?.price}
              </span>
              <span className="bg-pink-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer">
                {item?.data?.runners[0]?.ex?.availableToLay[0]?.price}
              </span>

              <span>x</span>
              <span className="bg-blue-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer">
                {item?.data?.runners[1]?.ex?.availableToBack[1]?.price}
              </span>
              <span className="bg-pink-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer">
                {item?.data?.runners[1]?.ex.availableToLay[1]?.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
