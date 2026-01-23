import Link from "next/link";
import { RiGithubFill } from "@remixicon/react";

const GithubItems = [
  {
    name: "LSH",
    link: "https://github.com/lsohyuniil",
  },
  {
    name: "KYS",
    link: "https://github.com/yeaseula",
  },
  {
    name: "LJW",
    link: "https://github.com/net79736",
  },
  {
    name: "CSG",
    link: "https://github.com/thr13",
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-gray-300 bg-gray-50">
      <div className="m-auto flex w-full max-w-[1470px] flex-col items-center justify-between gap-4 px-[15px] py-12 md:flex-row md:gap-0">
        <p className="text-main text-sm font-bold md:text-[18px]">© 2026 온하루 | Team ONHARU</p>

        <div className="flex items-center gap-5">
          {GithubItems.map(items => (
            <Link
              key={items.name}
              href={items.link}
              target="_blank"
              className="flex items-center gap-1"
            >
              <RiGithubFill />
              <span className="text-sm font-bold md:text-[18px]">{items.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
