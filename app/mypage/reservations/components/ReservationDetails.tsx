"use client";

import { useEffect, useMemo } from "react";
import ReservationCard from "./ReservationCard";
import { Pagination } from "@/components/feature/pagination/Pagination";
import { usePagination } from "@/components/feature/pagination/usePagination";
import { paginate } from "@/components/feature/pagination/utils/paginate";
import { ReservationItem } from "../types";

interface ReservationDetailsProps {
  items: ReservationItem[];
  status: string;
}

export default function ReservationDetails({ items }: ReservationDetailsProps) {
  const perPage = 4;

  // 날짜별 그룹핑, 최신순 정렬
  const flatItems = useMemo(() => {
    const groupedByDate = items.reduce<Record<string, ReservationItem[]>>((acc, item) => {
      const dateKey = item.date.split("T")[0];
      (acc[dateKey] = acc[dateKey] || []).push(item);
      return acc;
    }, {});

    return Object.keys(groupedByDate)
      .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
      .flatMap(date =>
        groupedByDate[date].map(item => ({
          date: new Date(date).toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          item,
        }))
      );
  }, [items]);

  // 페이지네이션
  const {
    currentPage,
    setCurrentPage,
    handleFirstPage,
    handlePrevPage,
    handleNextPage,
    handleLastPage,
  } = usePagination({ totalDataCount: flatItems.length, perPageDataCount: perPage });

  const paginatedItems = useMemo(
    () => paginate(flatItems, currentPage, perPage),
    [flatItems, currentPage, perPage]
  );

  // 페이지별로 날짜 그룹핑
  const paginatedGrouped = useMemo(() => {
    return paginatedItems.reduce<Record<string, ReservationItem[]>>((acc, { date, item }) => {
      (acc[date] = acc[date] || []).push(item);
      return acc;
    }, {});
  }, [paginatedItems]);

  const paginatedDates = useMemo(
    () =>
      Object.keys(paginatedGrouped).sort((a, b) => new Date(b).getTime() - new Date(a).getTime()),
    [paginatedGrouped]
  );

  // 필터 변경 시 페이지 초기화
  useEffect(() => {
    setCurrentPage(1);
  }, [items, setCurrentPage]);

  if (!items.length) {
    return (
      <p className="sm:text-md bg-secondary mt-6 rounded-[10px] py-8 text-center text-sm font-medium sm:mt-12.5">
        예약 내역이 없습니다.
      </p>
    );
  }

  return (
    <div className="relative mb-10">
      <ul className="mt-6 flex flex-col gap-4 sm:mt-12.5">
        {paginatedDates.map(date => (
          <div key={date}>
            <div className="sm:text-md mb-2 text-sm font-medium sm:mb-5">{date}</div>
            {paginatedGrouped[date].map(item => (
              <ReservationCard key={item.id} {...item} role={item.role} status={item.status} />
            ))}
          </div>
        ))}
      </ul>

      <div className="mt-section-sm-top sm:mt-section-lg-top flex justify-center">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalDataCount={flatItems.length}
          perPageDataCount={perPage}
          handleFirstPage={handleFirstPage}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          handleLastPage={handleLastPage}
        />
      </div>
    </div>
  );
}
