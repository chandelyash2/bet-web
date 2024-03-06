import React, { useEffect, useState } from "react";
import { Layout } from "../common/Layout";
import Container from "../common/Container";
import { InPlay } from "./InPlay";
import axios, { all } from "axios";
import { Loader } from "../common/Loader";
import socket from "@/socket";
const Home = () => {
  const [laoding, setLoading] = useState(false);
  const [inPlayData, setInPlayData] = useState<any>();
  useEffect(() => {
    fetchInPlay();
    socket.emit("inHome","in homepage")
  }, []);

  const fetchInPlay = async () => {
    setLoading(true);
    const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/inplay`);
    setInPlayData(data.data);
    setLoading(false);
  };
  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-8">
          <InPlay data={inPlayData} />
        </div>
      </Container>
      {laoding && <Loader />}
    </Layout>
  );
};

export default Home;
