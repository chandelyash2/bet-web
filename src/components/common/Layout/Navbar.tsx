import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
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
    link: "/sports/soocer",
    img: "/img/football.png",
  },
  {
    name: "Tennis",
    link: "/sports/tennis",
    img: "/img/tennis.png",
  },
  {
    name: "Badminton",
    link: "/sports/badminton",
    img: "/img/badminton.png",
  },
  {
    name: "Live Cards",
    link: "/sports/cards",
    img: "/img/card.png",
  },
  {
    name: "Casino",
    link: "/sports/casino",
    img: "/img/casino-chip.png",
  },
];
export const Navbar = () => {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-b from-header to-secondary-400 py-3">
      <ul className="hidden lg:flex justify-center w-full gap-20 m-auto font-semibold">
        {listing.map((item) => (
          <li
            key={item.link}
            className={twMerge(
              "flex gap-2"
            )}
          >
            <Image src={item.img} width={20} height={20} alt="'img" />
            <Link href={item.link} className={twMerge("hover:text-secondary",
              router.asPath.includes(item.name.toLocaleLowerCase())
                ? "text-secondary"
                : "")}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
