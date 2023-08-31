import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { listing } from "@/constants/sidebar";

const newList = [
  {
    name: "Home",
    link: "/",
    img: "/img/casino-chip.png",
  },
];

const Sidebar = () => {
  const router = useRouter();
  const selectedItem = listing.find((item) => {
    if (router.asPath.includes(item.name.toLocaleLowerCase())) {
      return item;
    }
  });
  console.log(selectedItem,"selele");
  
  const listArray =  newList.push(selectedItem);
  console.log(listArray,"listArray");
  

  const mapList =
    router.pathname !== "/" && listArray?.length > 0 ? newList : listing;

  return (
    <div className="hidden lg:flex flex-col border border-orange-600 rounded-xl mt-6 h-[480px] w-[200px] ">
      <ul className="flex flex-col gap-4 items-left text-lg font-bold p-2">
        {mapList.map((item) => (
          <li
            key={item.link}
            className={twMerge("flex gap-2 items-center w-full")}
            onClick={() => newList.push(item)}
          >
            <Image
              src={item.img}
              width={20}
              height={20}
              alt="'img"
              className="cursor-pointer"
            />
            <Link
              href={item.link}
              className={twMerge(
                "hover:text-secondary ",
                router.asPath.includes(item.name.toLocaleLowerCase())
                  ? "border-b-2 border-primary"
                  : ""
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
