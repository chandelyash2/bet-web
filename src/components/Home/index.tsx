import React from "react";
import { Layout } from "../common/Layout";
import Container from "../common/Container";
import { InPlay } from "./InPlay";
import { Upcoming } from "./Upcoming";

const Home = () => {
  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-8">
          <InPlay />
          <Upcoming />
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
