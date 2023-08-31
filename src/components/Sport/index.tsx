import React from "react";
import { Layout } from "../common/Layout";
import Container from "../common/Container";
import { PlayLayout } from "../Home/PlayLayout";
import { SportPlayLayout } from "./SportPlayLayout";
const liveCricketData = [
  {
    teamA: "India",
    teamB: "Australia",
    odds: {
      a: "2",
      b: "3",
    },
    time: "",
  },
  {
    teamA: "Afghanistan",
    teamB: "Bangladesh",
    odds: {
      a: "1.2",
      b: "3.4",
    },
    time: "",
  },
];
const upcomingCricketData = [
  {
    teamA: "England",
    teamB: "Austria",
    odds: {
      a: "2",
      b: "3",
    },
    time: "Saturday at 1:00 PM",
  },
  {
    teamA: "South Africa",
    teamB: "Newzeland",
    odds: {
      a: "1.2",
      b: "3.4",
    },
    time: "Sunday at 3:00 PM",
  },
];
export const Sport = () => {
  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-6">
          <SportPlayLayout />
          <SportPlayLayout /> 
          <SportPlayLayout />
           <SportPlayLayout />
        </div>
      </Container>
    </Layout>
  );
};
