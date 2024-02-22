interface ShowOddsProp {
  data: any;
  handleStake: (
    value: number,
    team: string,
    type: string,
    market: string,
    stake?: string
  ) => void;
}
export const ShowOdds = ({ data, handleStake }: ShowOddsProp) => {
  return (
    <div>
      <div className="relative">
        <div className="items-center flex w-full bg-secondary p-2 px-4 rounded-lg lg:before:content-[''] lg:before:absolute lg:before:right-0 lg:before:w-[55%] lg:before:top-0 lg:before:h-[100%] lg:before:bg-primary lg:before:rounded-r-lg font-bold ">
          <div className="flex-[1.5]">
            <h1>{data.market_name}</h1>
          </div>
          <div className="hidden flex-[1.5] md:flex justify-around z-0">
            <span>Back</span>
            <span>Lay</span>
          </div>
        </div>
      </div>
      <div className="bg-white text-primary rounded-b-lg p-4 font-bold">
        <div className="flex">
          <div className="flex-[1.5]">
            <h1>{data.runners[0]}</h1>
          </div>
          <div className="flex-[1.5] flex flex-col gap-4 md:flex-row justify-between">
            <div className="flex gap-4">
              <span
                className="bg-blue-100 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                onClick={() =>
                  handleStake(
                    data.data.runners[0].ex?.availableToBack[2]?.price,
                    data.runners[0],
                    "back",
                    data.market_name
                  )
                }
              >
                {data.data.runners[0].ex?.availableToBack[2]?.price}
              </span>
              <span
                className="bg-blue-100 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                onClick={() =>
                  handleStake(
                    data.data.runners[0].ex?.availableToBack[1]?.price,
                    data.runners[0],
                    "back",
                    data.market_name
                  )
                }
              >
                {data.data.runners[0].ex?.availableToBack[1]?.price}
              </span>
              <span
                className="bg-blue-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                onClick={() =>
                  handleStake(
                    data.data.runners[0].ex?.availableToBack[0]?.price,
                    data.runners[0],
                    "back",
                    data.market_name
                  )
                }
              >
                {data.data.runners[0].ex?.availableToBack[0]?.price}
              </span>
            </div>
            <div className="flex gap-4">
              <span
                className="bg-pink-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                onClick={() =>
                  handleStake(
                    data.data.runners[0].ex?.availableToLay[0]?.price,
                    data.runners[0],
                    "lay",
                    data.market_name
                  )
                }
              >
                {data.data.runners[0].ex?.availableToLay[0]?.price}
              </span>
              <span
                className="bg-pink-100 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                onClick={() =>
                  handleStake(
                    data.data.runners[0].ex?.availableToLay[1]?.price,
                    data.runners[0],
                    "lay",
                    data.market_name
                  )
                }
              >
                {data.data.runners[0].ex?.availableToLay[1]?.price}
              </span>
              <span
                className="bg-pink-100 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                onClick={() =>
                  handleStake(
                    data.data.runners[0].ex?.availableToLay[2]?.price,
                    data.runners[0],
                    "lay",
                    data.market_name
                  )
                }
              >
                {data.data.runners[0].ex?.availableToLay[2]?.price}
              </span>
            </div>
          </div>
        </div>
        <hr className="m-2" />
        <div className="flex">
          <div className="flex-[1.5]">
            <h1>{data.runners[1]}</h1>
          </div>
          <div className="flex-[1.5] flex flex-col gap-4 md:flex-row justify-between">
            <div className="flex gap-4">
              <span
                className="bg-blue-100 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                onClick={() =>
                  handleStake(
                    data.data.runners[1].ex?.availableToBack[2]?.price,
                    data.runners[1],
                    "back",
                    data.market_name
                  )
                }
              >
                {data.data.runners[1].ex?.availableToBack[2]?.price}
              </span>{" "}
              <span
                className="bg-blue-100 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                onClick={() =>
                  handleStake(
                    data.data.runners[1].ex?.availableToBack[1]?.price,
                    data.runners[1],
                    "back",
                    data.market_name
                  )
                }
              >
                {data.data.runners[1].ex?.availableToBack[1]?.price}
              </span>
              <span
                className="bg-blue-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                onClick={() =>
                  handleStake(
                    data.data.runners[1].ex?.availableToBack[0]?.price,
                    data.runners[1],
                    "back",
                    data.market_name
                  )
                }
              >
                {data.data.runners[1].ex?.availableToBack[0]?.price}
              </span>
            </div>
            <div className="flex gap-4">
              <span
                className="bg-pink-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                onClick={() =>
                  handleStake(
                    data.data.runners[1].ex?.availableToLay[0]?.price,
                    data.runners[1],
                    "lay",
                    data.market_name
                  )
                }
              >
                {data.data.runners[1].ex?.availableToLay[0]?.price}
              </span>
              <span
                className="bg-pink-100 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                onClick={() =>
                  handleStake(
                    data.data.runners[1].ex?.availableToLay[1]?.price,
                    data.runners[1],
                    "lay",
                    data.market_name
                  )
                }
              >
                {data.data.runners[1].ex?.availableToLay[1]?.price}
              </span>
              <span
                className="bg-pink-100 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                onClick={() =>
                  handleStake(
                    data.data.runners[1].ex?.availableToLay[2]?.price,
                    data.runners[1],
                    "lay",
                    data.market_name
                  )
                }
              >
                {data.data.runners[1].ex?.availableToLay[2]?.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
