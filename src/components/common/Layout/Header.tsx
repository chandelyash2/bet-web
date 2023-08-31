import React, { useState } from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../PrimaryButton";
import { useRouter } from "next/router";
const listing = [
  {
    name: "InPlay",
    link: "/",
    img: "/img/play.png",
  },
  {
    name: "Cricket",
    link: "/sports/cricket",
    img: "/img/cricket.png",
  },
  {
    name: "Soccer",
    link: "/users",
    img: "/img/football.png",
  },
  {
    name: "Tennis",
    link: "/categories",
    img: "/img/tennis.png",
  },
  {
    name: "Badminton",
    link: "/categories",
    img: "/img/badminton.png",
  },
  {
    name: "Casino",
    link: "/categories",
    img: "/img/casino-chip.png",
  },
];
export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const router = useRouter();
  return (
    <header>
      <Container>
        <div className="hidden lg:flex justify-between">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width="150" height="150" />
          </Link>
          <div className="flex gap-4">
            <PrimaryButton
              label="Login"
              handleClick={() => router.push("/login")}
            />
            <PrimaryButton label="Register" />
          </div>
        </div>
        <div className="flex justify-between lg:hidden">
          <Image src="/logo.png" alt="logo" width="100" height="100" />
          <Image
            src="/hamburger.png"
            alt="logo"
            width="30"
            height="30"
            className="cursor-pointer"
            onClick={() => setMenuActive(true)}
          />
        </div>
        {menuActive && (
          <div className="absolute bg-header w-full h-full top-0 left-0 z-[9999] text-white">
            <Container>
              <div className="flex justify-between">
                <Image src="/logo.png" alt="logo" width="100" height="100" />
                <Image
                  src="/close.png"
                  alt="logo"
                  width="30"
                  height="30"
                  className="cursor-pointer"
                  onClick={() => setMenuActive(false)}
                />
              </div>
              <ul className="mt-10 flex flex-col gap-8 items-left text-xl">
                {listing.map((item, i) => (
                  <li key={item.link} className="flex gap-2" onClick={()=>setMenuActive(false)}>
                    <Image src={item.img} width={20} height={20} alt="'img" />
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </Container>
          </div>
        )}
      </Container>
    </header>
  );
};
