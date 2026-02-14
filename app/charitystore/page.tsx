"use client";
import { useQuery } from "@tanstack/react-query";
import { GetStores } from "@/lib/api/GetStores";
import { CharityMain } from "../page-section/charity-shop/data/type";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { Navigation } from "@/components/feature/category/Navigation";
import { BgrDropdown } from "@/components/feature/dropdown/Dropdown";
import { Card } from "@/components/ui/card/Card";
import { CardSkeleton } from "@/components/ui/card/CardSkeleton";
import { Category } from "@/components/ui/card/Category";
import { HashTag } from "@/components/ui/card/HashTag";
import { Pagination } from "@/components/feature/pagination/Pagination";
import { useDropdown } from "@/components/feature/dropdown/useDropdown";
import { SelectData } from "./data/dropdown";
import { Thumbnail } from "@/components/ui/card/Thumbnail";

export default function CharityStore() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("pageNum") ?? 1);
  const categoryId = Number(searchParams.get("categoryId") ?? 0);

  const handlePageChange = (nextPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("pageNum", String(nextPage));
    params.set("categoryId", String(categoryId));
    router.push(`charitystore?${params.toString()}`);
  };

  const {
    open,
    selected,
    highlightedIndex,
    setSelected,
    setHighlightedIndex,
    handleOpen,
    handleClose,
    handleKeyDown,
    containerRef,
    listboxRef,
  } = useDropdown({ options: SelectData });

  const { data, isLoading, error } = useQuery({
    queryKey: ["stores", page, 16, categoryId],
    queryFn: () => GetStores(page, 16, categoryId),
  });

  console.log(data);

  const filterByCategory = (value: number) => {
    //value : 전체,식당,카페...
    const params = new URLSearchParams(searchParams);
    params.set("categoryId", String(value));
    params.set("page", "1");
    router.push(`charitystore?${params.toString()}`);
  };
  const stores: CharityMain[] = data?.data?.stores ?? [];

  //const filterStore = filterByCategory(stores);
  /**
   * 현재 filter 로직은 카테고리별 정렬만 구현한 상태입니다.
   * 추천순, 인기순, 거리순 관련 정보를 어떻게 표현할지 기능 완성 후 고도화시킬 예정
   * 현재 드롭다운 셀렉트 기능만 구현된 상태
   * **/
  //const paginatedStores = paginate(stores, currentPage, 16);

  return (
    <section className="mt-section-sm-top md:mt-section-lg-top mb-section-sm-bottom md:mb-section-lg-bottom">
      <h2 className="sr-only">나눔 가게 전체 보기</h2>
      <div className="wrapper">
        <Navigation onChange={filterByCategory} />
        <BgrDropdown
          options={SelectData}
          open={open}
          selected={selected}
          highlightedIndex={highlightedIndex}
          setSelected={setSelected}
          setHighlightedIndex={setHighlightedIndex}
          handleOpen={handleOpen}
          handleClose={handleClose}
          handleKeyDown={handleKeyDown}
          containerRef={containerRef}
          listboxRef={listboxRef}
        />
        <div className="mt-4 grid grid-cols-2 gap-4 md:mt-8 lg:grid-cols-4">
          {error && <>데이터 로드에 실패했습니다.</>}
          {isLoading && (
            <>
              {Array.from({ length: 16 }).map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </>
          )}
          {!isLoading && (
            <>
              {stores.map(items => (
                <Card
                  key={items.id}
                  type="charity"
                  storeId={items.id}
                  storelink={String(items.id)}
                  storeThumnail={
                    <Thumbnail
                      src={""}
                      openTime={items.openTime}
                      closeTime={items.closeTime}
                      isOpen={items.isOpen}
                      hasSharing={items.hasSharing}
                    />
                  }
                  storename={items.name}
                  storeIntroduce={items.introduction}
                  category={<Category category={items.categoryName} />}
                  hashtags={<HashTag tags={items.tags || []} />}
                />
              ))}
            </>
          )}
        </div>

        <div className="mt-section-sm-top md:mt-section-lg-top flex justify-center">
          <Pagination totalPage={data?.data?.totalPages} handlePageChange={handlePageChange} />
        </div>
      </div>
    </section>
  );
}
