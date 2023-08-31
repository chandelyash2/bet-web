import Image from "next/image";
import React from "react";
import Container from "../Container";

export const Footer = () => {
  return (
    <footer className="0">
      <Container>
        <div className="flex flex-col gap-4">
          <div className="flex text-center justify-center lg:justify-between">
            <Image src="/logo.png" alt="logo" width="150" height="150" />
            <div className="hidden lg:flex gap-4">
              <span>Game</span>
              <span>Company</span>
              <span>Resources</span>
            </div>
          </div>
          <hr className="w-full h-2" />
          <div className="flex justify-between">
            <span className="font-semibold">All rights reserved © 2023</span>
            <span className="flex gap-4">
              <Image
                src="/img/instagram.png"
                alt="logo"
                width="30"
                height="30"
              />
              <Image
                src="/img/facebook.png"
                alt="logo"
                width="30"
                height="30"
              />
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
