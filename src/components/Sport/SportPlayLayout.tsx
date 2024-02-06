import React, { useEffect, useState } from "react";
import moment from "moment";
import { PrimaryButton } from "../common/PrimaryButton";
import socket from "@/socket";
import { twMerge } from "tailwind-merge";
import toast, { Toaster } from "react-hot-toast";
import { Loader } from "../common/Loader";
import Link from "next/link";
const stakesaArray = [
  {
    value: "100",
    color: 'primary',
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
export const SportPlayLayout = ({ data }: { data: any }) => {
  const [addStake, setAddStake] = useState({
    odds: 0,
    team: "",
    type: "",
    stake: "",
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to the socket server");
    });
    socket.on("apiResponse", (data) => {
      setLoading(false);
      const pasredData = data.data;
      if (pasredData.error) {
        toast.error(pasredData.error);
      } else {
        toast.success(pasredData.success);
      }
    });
    // return () => {
    //     socket.disconnect();
    // };
  }, []);
  const handleStake = (
    value: number,
    team: string,
    type: string,
    stake?: string
  ) => {
    setAddStake({
      odds: value,
      team,
      type,
      stake: stake ? stake : "",
    });
  };

  const placeBet = () => {
    setLoading(true);
    const obj = {
      data: {
        // url: `https://www.victoryexch.com/events/${data.slug}/${data.sport_id}/${data.league_id}/${data.id}`,
        event_name: data.event_name,
        odds: addStake.odds,
        stakes: addStake.stake,
      },
    };
    socket.emit("clientMessage", obj);
    setAddStake({ odds: 0, team: "", type: "", stake: "" });
  };
  return (
    <div className="flex flex-col gap-6">
      <Link href="/">
        <PrimaryButton label="<= Back to home" />
      </Link>
      {data?.id && (
        <>
          <div className="relative">
            <div className="items-center flex w-full bg-secondary p-2 px-4 rounded-lg lg:before:content-[''] lg:before:absolute lg:before:right-0 lg:before:w-[55%] lg:before:top-0 lg:before:h-[100%] lg:before:bg-primary lg:before:rounded-r-lg font-bold">
              <div className="flex-[1.5]">
                <h1>{data.event_name}</h1>
                <h2>{moment(data.event_date).format("DD-MMMM-YYYY HH:mm")}</h2>
              </div>
              <div className="hidden  flex-[1.5] z-[999] md:flex justify-around">
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
                        data.markets[0].data.runners[0].ex?.availableToBack[2]
                          ?.price,
                        data.runners[0],
                        "back"
                      )
                    }
                  >
                    {
                      data.markets[0].data.runners[0].ex?.availableToBack[2]
                        ?.price
                    }
                  </span>
                  <span
                    className="bg-blue-100 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                    onClick={() =>
                      handleStake(
                        data.markets[0].data.runners[0].ex?.availableToBack[1]
                          ?.price,
                        data.runners[0],
                        "back"
                      )
                    }
                  >
                    {
                      data.markets[0].data.runners[0].ex?.availableToBack[1]
                        ?.price
                    }
                  </span>
                  <span
                    className="bg-blue-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                    onClick={() =>
                      handleStake(
                        data.markets[0].data.runners[0].ex?.availableToBack[0]
                          ?.price,
                        data.runners[0],
                        "back"
                      )
                    }
                  >
                    {
                      data.markets[0].data.runners[0].ex?.availableToBack[0]
                        ?.price
                    }
                  </span>
                </div>
                <div className="flex gap-4">
                  <span
                    className="bg-pink-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                    onClick={() =>
                      handleStake(
                        data.markets[0].data.runners[0].ex?.availableToLay[0]
                          ?.price,
                        data.runners[0],
                        "lay"
                      )
                    }
                  >
                    {
                      data.markets[0].data.runners[0].ex?.availableToLay[0]
                        ?.price
                    }
                  </span>
                  <span
                    className="bg-pink-100 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                    onClick={() =>
                      handleStake(
                        data.markets[0].data.runners[0].ex?.availableToLay[1]
                          ?.price,
                        data.runners[0],
                        "lay"
                      )
                    }
                  >
                    {
                      data.markets[0].data.runners[0].ex?.availableToLay[1]
                        ?.price
                    }
                  </span>
                  <span
                    className="bg-pink-100 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                    onClick={() =>
                      handleStake(
                        data.markets[0].data.runners[0].ex?.availableToLay[2]
                          ?.price,
                        data.runners[0],
                        "lay"
                      )
                    }
                  >
                    {
                      data.markets[0].data.runners[0].ex?.availableToLay[2]
                        ?.price
                    }
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
                        data.markets[0].data.runners[1].ex?.availableToBack[2]
                          ?.price,
                        data.runners[1],
                        "back"
                      )
                    }
                  >
                    {
                      data.markets[0].data.runners[1].ex?.availableToBack[2]
                        ?.price
                    }
                  </span>{" "}
                  <span
                    className="bg-blue-100 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                    onClick={() =>
                      handleStake(
                        data.markets[0].data.runners[1].ex?.availableToBack[1]
                          ?.price,
                        data.runners[1],
                        "back"
                      )
                    }
                  >
                    {
                      data.markets[0].data.runners[1].ex?.availableToBack[1]
                        ?.price
                    }
                  </span>
                  <span
                    className="bg-blue-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                    onClick={() =>
                      handleStake(
                        data.markets[0].data.runners[1].ex?.availableToBack[0]
                          ?.price,
                        data.runners[1],
                        "back"
                      )
                    }
                  >
                    {
                      data.markets[0].data.runners[1].ex?.availableToBack[0]
                        ?.price
                    }
                  </span>
                </div>
                <div className="flex gap-4">
                  <span
                    className="bg-pink-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                    onClick={() =>
                      handleStake(
                        data.markets[0].data.runners[1].ex?.availableToLay[0]
                          ?.price,
                        data.runners[1],
                        "lay"
                      )
                    }
                  >
                    {
                      data.markets[0].data.runners[1].ex?.availableToLay[0]
                        ?.price
                    }
                  </span>
                  <span
                    className="bg-pink-100 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                    onClick={() =>
                      handleStake(
                        data.markets[0].data.runners[1].ex?.availableToLay[1]
                          ?.price,
                        data.runners[1],
                        "lay"
                      )
                    }
                  >
                    {
                      data.markets[0].data.runners[1].ex?.availableToLay[1]
                        ?.price
                    }
                  </span>
                  <span
                    className="bg-pink-100 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
                    onClick={() =>
                      handleStake(
                        data.markets[0].data.runners[1].ex?.availableToLay[2]
                          ?.price,
                        data.runners[1],
                        "lay"
                      )
                    }
                  >
                    {
                      data.markets[0].data.runners[1].ex?.availableToLay[2]
                        ?.price
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {addStake.odds > 0 && (
        <div
          className={twMerge(
            "flex flex-col gap-4 mt-10  w-full p-4 items-center md:flex-row rounded-lg",
            addStake.type === "back" ? "bg-blue-300" : "bg-pink-300"
          )}
        >
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
              setAddStake({ odds: 0, team: "", type: "", stake: "" });
            }}
          />
        </div>
      )}
      {loading && <Loader />}
      <Toaster />
    </div>
  );
};
