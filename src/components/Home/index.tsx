import React, { useEffect, useState } from "react";
import { Layout } from "../common/Layout";
import Container from "../common/Container";
import { InPlay } from "./InPlay";
import axios, { all } from "axios";
const Home = () => {
  const [inPlayData, setInPlayData] = useState<any>();
  useEffect(() => {
    fetchInPlay();
  }, []);

  const fetchInPlay = async () => {
    const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/inplay`);
    setInPlayData(data.data);
  };
  console.log(inPlayData,'inplay');
  
  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-8">
          <InPlay data={inPlayData} />
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
