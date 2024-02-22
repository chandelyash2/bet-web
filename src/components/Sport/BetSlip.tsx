import React from "react";
import { twMerge } from "tailwind-merge";
import { PrimaryButton } from "../common/PrimaryButton";
const stakesaArray = [
  {
    value: "100",
    color: "primary",
  },
  {
    value: "500",
    color: "secondary",
  },
  {
    value: "1K",
    color: "header",
  },
  {
    value: "2K",
    color: "primary",
  },
];
interface BetSlipProp {
  addStake: any;
  setAddStake: any;
  placeBet: () => void;
}
export const BetSlip = ({ addStake, setAddStake, placeBet }: BetSlipProp) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-4 mt-10  w-full p-4 items-center lg:flex-row rounded-lg",
        addStake.type === "back" ? "bg-blue-300" : "bg-pink-300"
      )}
    >
      <h1 className="font-bold text-xl">{addStake.market}</h1>
      <h2 className="text-header font-semibold">
        {addStake.team}
        <span className="font-bold">
          ( {addStake.type.toLocaleUpperCase()})
        </span>
      </h2>

      <input value={addStake.odds} className="text-black" />
      <input
        placeholder="Stake"
        className="text-black"
        value={addStake.stake || 0}
        onChange={(e) =>
          setAddStake({
            odds: addStake.odds,
            team: addStake.team,
            type: addStake.type,
            market: addStake.market,
            stake: e.target.value,
          })
        }
      />
      <div className="flex gap-4">
        {stakesaArray.map((item) => (
          <span
            key={item.value}
            className={`p-1 rounded-lg cursor-pointer bg-${item.color}`}
            onClick={() =>
              setAddStake({
                odds: addStake.odds,
                team: addStake.team,
                type: addStake.type,
                market: addStake.market,
                stake: item.value,
              })
            }
          >
            {item.value}
          </span>
        ))}
      </div>
      <PrimaryButton label="Place Bet" handleClick={placeBet} />
      <PrimaryButton
        label="Close"
        handleClick={() => {
          setAddStake({
            odds: 0,
            team: "",
            type: "",
            market: "",
            stake: "",
          });
        }}
      />
    </div>
  );
};
