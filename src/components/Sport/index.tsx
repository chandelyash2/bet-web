import React, { useEffect, useState } from "react";
import { Layout } from "../common/Layout";
import Container from "../common/Container";
import { PlayLayout } from "../Home/PlayLayout";
import { SportPlayLayout } from "./SportPlayLayout";
import axios from "axios";
import { useRouter } from "next/router";
import { Loader } from "../common/Loader";

export const Sport = () => {
  const [eventData, setEventData] = useState();

  const router = useRouter();
  const { sport, league, event } = router.query;
  useEffect(() => {
    let interval = setInterval(async () => {
      fetchMathcData();
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [sport]);

  const fetchMathcData = async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/get-event`,
      {
        params: {
          sport,
          league,
          event,
        },
      }
    );
    result.data && setEventData(result.data.event);
  };

  return (
    <Layout>
      <Container>
        {eventData ? (
          <div className="flex flex-col gap-6">
            <SportPlayLayout data={eventData} />
          </div>
        ) : (
          <Loader />
        )}
      </Container>
    </Layout>
  );
};
