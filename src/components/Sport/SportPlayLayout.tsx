import React, { useEffect, useState } from "react";
import moment from "moment";
import { PrimaryButton } from "../common/PrimaryButton";
import socket from "@/socket";
import { twMerge } from "tailwind-merge";
import toast, { Toaster } from "react-hot-toast";
import { Loader } from "../common/Loader";
import Link from "next/link";
import router from "next/router";
import { ShowOdds } from "./ShowOdds";
import { BookmakerOdds } from "./BookmakerOdds";
import { BetSlip } from "./BetSlip";
import { FancyOdds } from "./FancyOdds";
import { Modal } from "../common/Modal";
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
export const SportPlayLayout = ({ data }: { data: any }) => {
  console.log(data, "dataaa");

  const { sportName } = router.query;

  const [addStake, setAddStake] = useState({
    odds: 0,
    team: "",
    type: "",
    market: "",
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
        toast.success("Bet Placed");
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
    market: string,
    stake?: string
  ) => {
    setAddStake({
      odds: value,
      team,
      type,
      market,
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
        sportName,
      },
    };
    socket.emit("clientMessage", obj);
    setAddStake({ odds: 0, team: "", type: "", market: "", stake: "" });
  };
  const filteredFancy = data.fancies.filter((item: any) => item.yes_odd);

  return (
    <div className="flex flex-col gap-6">
      <Link href="/">
        <PrimaryButton label="<= Back to home" />
      </Link>
      {data?.id && (
        <>
          <div className="flex flex-col gap-2 md:flex-row md:justify-between">
            <h1>{data.event_name}</h1>
            <h2>{moment(data.event_date).format("DD-MMMM-YYYY HH:mm")}</h2>
          </div>

          {data.markets[0] && (
            <ShowOdds data={data.markets[0]} handleStake={handleStake} />
          )}

          <div className="flex flex-col gap-4 md:flex-row md:justify-between">
            {data.bookmakers[0] && (
              <BookmakerOdds
                data={data.bookmakers[0]}
                handleStake={handleStake}
              />
            )}

            {data.bookmakers[1] && (
              <BookmakerOdds
                data={data.bookmakers[1]}
                handleStake={handleStake}
              />
            )}
            {data.bookmakers[2] && (
              <BookmakerOdds
                data={data.bookmakers[2]}
                handleStake={handleStake}
              />
            )}
          </div>

          {/* {<FancyOdds handleStake={handleStake} data={filteredFancy} />} */}

          {data.markets[1] && (
            <ShowOdds data={data.markets[1]} handleStake={handleStake} />
          )}
    
        </>
      )}

      {addStake.odds > 0 && (
        <Modal
          close={() => {
            setAddStake({
              odds: 0,
              team: "",
              type: "",
              market: "",
              stake: "",
            });
          }}
        >
          <BetSlip
            placeBet={placeBet}
            addStake={addStake}
            setAddStake={setAddStake}
          />
        </Modal>
      )}
      {loading && <Loader />}
      <Toaster />
    </div>
  );
};
