"use client";

import { useEffect, useState, useMemo } from "react";
import { SideMenu } from "./component/SideMenu";
import { Map } from "@/components/feature/map/map";
import { Navigation } from "@/components/feature/category/Navigation";
import { useMyLocation } from "@/components/feature/map/hooks/useMyLocation";
import { useCategoryFilter } from "@/components/feature/category/useCategoryFilter";
import { DummyData } from "./data/DummyData";
import { MyAddress } from "./component/MyAddress";
import { Card } from "@/components/ui/card/Card";
import { StoreAddress } from "@/components/ui/card/StoreAddress";
import { Button } from "@/components/ui/Button";
import { LocationSearch } from "./component/LocationSearch";
import { NearbyStore } from "./type/type";
import { useSearch } from "@/components/feature/map/hooks/useSearch";
import { searchStores } from "@/components/feature/map/searchStore";

export default function Nearby() {
  const [allStores, setAllStores] = useState<NearbyStore[]>([]);
  const { mylocation, handleMyLocation } = useMyLocation();
  const { inputValue, setInputValue, keyword, setKeyword, handleSearch, handleInputChange } =
    useSearch();
  const { category, setCategory, filterByCategory } = useCategoryFilter();

  useEffect(() => {
    if (mylocation.lat === 0) return;
    setAllStores(DummyData(mylocation.lat, mylocation.lng));
  }, [mylocation]);

  const stores = useMemo(() => {
    let result = allStores;

    if (keyword) {
      result = searchStores({ stores: result, keyword: keyword });

      // 검색 결과의 카테고리 분석
      if (result.length > 0) {
        const categories = result.map(store => store.category);
        const uniqueCategories = [...new Set(categories)];

        // 검색 결과가 모두 같은 카테고리면 해당 카테고리로 변경
        if (uniqueCategories.length === 1) {
          const resultCategory = uniqueCategories[0];
          if (category !== resultCategory) {
            setCategory(resultCategory);
          }
        } else {
          // 여러 카테고리가 섞여있으면 "전체"로
          if (category !== "전체") {
            setCategory("전체");
          }
        }
      }
    } else if (category !== "전체") {
      result = filterByCategory(result);
    }

    return result;
  }, [allStores, keyword, category, filterByCategory, setCategory]);

  const handleCategoryChange = () => {
    setKeyword("");
    setInputValue("");
  };

  return (
    <section>
      <h2 className="sr-only">내 주변 착한가게를 찾을 수 있습니다.</h2>
      <div className="flex h-[100vh]">
        <SideMenu>
          <MyAddress mylocation={mylocation} />
          <LocationSearch value={inputValue} onChange={handleInputChange} onSearch={handleSearch} />
          <div className="grid grid-cols-1 gap-7.5">
            {stores.map(store => (
              <Card
                key={store.id}
                storelink="/"
                storeSrc=""
                storename={store.name}
                storeAddress={<StoreAddress address={store.address} />}
                storeIntroduce={store.description}
                reservation={
                  <Button varient="default" width="lg" height="md" fontSize="md">
                    예약하기
                  </Button>
                }
              ></Card>
            ))}
          </div>
        </SideMenu>
        <div className="relative flex-1">
          <div className="absolute top-5 left-[50%] z-50 w-full -translate-x-[50%]">
            <Navigation
              value={category}
              onChange={setCategory}
              InitializePage={handleCategoryChange}
            />
          </div>
          <Map type="search" store={stores} handleMyLocation={handleMyLocation} />
        </div>
      </div>
    </section>
  );
}
