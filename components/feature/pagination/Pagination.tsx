"use client";
import { PAGELIMIT } from "./data/PageLimit";
import { createPageNumberList } from "./utils/utils";
import clsx from "clsx";
import {
  RiArrowRightSLine,
  RiArrowRightDoubleLine,
  RiArrowLeftDoubleLine,
  RiArrowLeftSLine,
} from "@remixicon/react";

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  handlePageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPage, handlePageChange }: PaginationProps) {
  /**
   * @param totalPage 총 페이지 갯수
   * @param groupLength 그룹 갯수 = 총 페이지 / 5
   * @param LastGroupHead 마지막 그룹의 첫번째 페이지 넘버
   */

  const groupLength = Math.ceil(totalPage / PAGELIMIT);
  const LastGroupHead = PAGELIMIT * (groupLength - 1);

  const pageNumberList = createPageNumberList(currentPage, totalPage);

  //1그룹은 무조건 1,2,3,4,5 ... 현재페이지가 5x(그룹길이 - 1)
  // 그룹길이가 2일때 2그룹은 6~10 즉, 5x1보다 크고 5x2보다 작음
  // 그룹길이가 3일때 3그룹은 11~15, 5x2보다 크고 5x3보다 작음
  // currentpage > 5*(n-1) && currentpage <= 5*n
  return (
    <div className={clsx("flex items-center gap-1")}>
      <button
        className="flex h-7 w-7 items-center justify-center"
        disabled={currentPage <= 5 * (groupLength - 1)}
        onClick={() => {
          handlePageChange(1);
        }}
      >
        <RiArrowLeftDoubleLine
          size={18}
          className={currentPage <= 5 * (groupLength - 1) ? "text-gray-300" : "text-main"}
        />
      </button>

      <button
        className="flex h-7 w-7 items-center justify-center"
        disabled={currentPage === 1}
        onClick={() => {
          handlePageChange(currentPage - 1);
        }}
      >
        <RiArrowLeftSLine size={18} className={currentPage === 1 ? "text-gray-300" : "text-main"} />
      </button>

      <ul className="flex gap-1">
        {pageNumberList.map(item => (
          <li
            key={item}
            onClick={() => {
              handlePageChange(item);
            }}
            className={clsx(
              "flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-sm",
              {
                "bg-main font-bold text-white": currentPage === item,
                "text-main hover:bg-border": currentPage !== item,
              }
            )}
          >
            {item}
          </li>
        ))}
      </ul>

      <button
        className="flex h-7 w-7 items-center justify-center"
        disabled={currentPage === totalPage}
        onClick={() => {
          handlePageChange(currentPage + 1);
        }}
      >
        <RiArrowRightSLine
          size={18}
          className={currentPage === totalPage ? "text-gray-300" : "text-main"}
        />
      </button>

      <button
        className="flex h-7 w-7 items-center justify-center"
        disabled={currentPage > 5 * (groupLength - 1) && currentPage <= 5 * groupLength}
        onClick={() => {
          handlePageChange(LastGroupHead + 1);
        }}
      >
        <RiArrowRightDoubleLine
          size={18}
          className={
            currentPage > 5 * (groupLength - 1) && currentPage <= 5 * groupLength
              ? "text-gray-300"
              : "text-main"
          }
        />
      </button>
    </div>
  );
}
