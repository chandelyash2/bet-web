import React, { useEffect, useState } from "react";
import moment from "moment";
import { PrimaryButton } from "../common/PrimaryButton";
import socket from "@/socket";
import { twMerge } from "tailwind-merge";
import toast, { ToastBar, Toaster } from "react-hot-toast";
export const SportPlayLayout = ({ data }: { data: any }) => {
  const [addStake, setAddStake] = useState({
    odds: 0,
    team: "",
    type: "",
  });
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to the socket server");
    });
    socket.on("apiResponse", (data) => {
      // if (data.success) {
      //   console.log(data, "toasss");
      //   return toast(data);
      // }
    });
    // return () => {
    //     socket.disconnect();
    // };
  }, []);
  const handleStake = (value: number, team: string, type: string) => {
    setAddStake({
      odds: value,
      team,
      type,
    });
  };
  const placeBet = () => {
    const obj = {
      data: {
        url: `https://www.victoryexch.com/events/${data.slug}/${data.sport_id}/${data.league_id}/${data.id}`,
        odds: addStake.odds,
        stakes: 100,
      },
    };
    socket.emit("clientMessage", obj);
    setAddStake({ odds: 0, team: "", type: "" });
  };
  return (
    <div>
      {data?.id && (
        <>
          <div className="relative">
            <div className="items-center flex w-full bg-secondary p-2 px-4 rounded-lg lg:before:content-[''] lg:before:absolute lg:before:right-0 lg:before:w-[55%] lg:before:top-0 lg:before:h-[100%] lg:before:bg-primary lg:before:rounded-r-lg font-bold">
              <div className="flex-[1.5]">
                <h1>
                  {data.runners[0]} V {data.runners[1]}
                </h1>
                <h2>{moment(data.event_date).format("DD-MMMM-YYYY HH:mm")}</h2>
              </div>
              <div className="hidden lg:grid flex-[1.5] z-[999]  grid-cols-2 lg:grid-cols-6">
                <span>Back</span>
                <span>Lay</span>
              </div>
            </div>
          </div>
          <div className=" bg-white text-primary rounded-b-lg p-4 font-bold">
            <div className="flex">
              <div className="flex-[1.5]">
                <h1>{data.runners[0]}</h1>
              </div>
              <div className="flex-[1.5]  grid grid-cols-2 lg:grid-cols-6">
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
                  {data.markets[0].data.runners[0].ex?.availableToLay[0]?.price}
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
                  {data.markets[0].data.runners[0].ex?.availableToLay[1]?.price}
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
                  {data.markets[0].data.runners[0].ex?.availableToLay[2]?.price}
                </span>
              </div>
            </div>
            <hr className="m-2" />
            <div className="flex">
              <div className="flex-[1.5]">
                <h1>{data.runners[1]}</h1>
              </div>
              <div className="flex-[1.5] grid grid-cols-2 lg:grid-cols-6">
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
                  {data.markets[0].data.runners[1].ex?.availableToLay[0]?.price}
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
                  {data.markets[0].data.runners[1].ex?.availableToLay[1]?.price}
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
                  {data.markets[0].data.runners[1].ex?.availableToLay[2]?.price}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
      <Toaster />
      {addStake.odds > 0 && (
        <div className="flex gap-4 mt-10 bg-pink-200 w-full p-4 items-center">
          <h2 className="text-header font-semibold">
            {addStake.team}{" "}
            <span
              className={
                (twMerge("font-bold"),
                addStake.type === "back" ? "text-blue-500" : "text-pink-500")
              }
            >
              ( {addStake.type.toLocaleUpperCase()})
            </span>
          </h2>

          <input value={addStake.odds} className="text-black" />
          <input placeholder="Stake" className="text-black" value={100} />
          <PrimaryButton label="Place Bet" handleClick={placeBet} />
          <PrimaryButton
            label="Close"
            handleClick={() => {
              setAddStake({ odds: 0, team: "", type: "" });
            }}
          />
        </div>
      )}
    </div>
  );
};
