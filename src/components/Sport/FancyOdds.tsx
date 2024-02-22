import React from "react";
import { BetSlip } from "./BetSlip";
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
export const FancyOdds = ({ handleStake, data }: ShowOddsProp) => {
  return (
    <div>
      <div className="flex-[1.5] bg-secondary p-2 px-4 rounded-lg font-bold">
        <h1>Fancy Market</h1>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-2">
        {data.map((item: any) => (
          <div
            className="bg-white text-primary rounded-lg p-4 font-bold w-full md:w-[220px] lg:w-[300px] h-auto"
            key={item.id}
          >
            <div className="flex items-center">
              <div className="flex-[1.5]">
                <h1>{item.runner_name}</h1>
              </div>
              <div className="flex flex-col gap-4 md:flex-row justify-between">
                <span
                  className="bg-pink-300 p-1 rounded-lg w-10 h-8 lg:w-14 flex justify-center items-center text-sm lg:text-md cursor-pointer"
                  onClick={() =>
                    handleStake(item.yes_odd, item.runner_name, "lay", "fancy")
                  }
                >
                  {item.no_odd}
                </span>
                <span
                  className="bg-blue-300 p-1 rounded-lg w-10 h-8 lg:w-14 flex justify-center items-center text-sm lg:text-md cursor-pointer"
                  onClick={() =>
                    handleStake(item.no_odd, item.runner_name, "back", "fancy")
                  }
                >
                  {item.yes_odd}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
