"use client";

import { SideMenu } from "./component/SideMenu";
import { Map } from "@/components/feature/map/map";
import { Navigation } from "@/components/feature/category/Navigation";
import { useMyLocation } from "@/components/feature/map/hooks/useMyLocation";
import { useCategoryFilter } from "@/components/feature/category/useCategoryFilter";
import { useFilterStore } from "@/components/feature/map/hooks/useFilterStore";
import { DummyData } from "./data/DummyData";
import { useEffect, useState } from "react";
import { NearbyStore } from "./type/type";

export default function Nearby() {
  const [stores, setStores] = useState<NearbyStore[]>([]);
  const { mylocation, handleMyLocation } = useMyLocation();
  const { category, setCategory, filterByCategory } = useCategoryFilter();
  const { storeData, handleFilterStore } = useFilterStore({ mylocation: mylocation, data: stores });

  useEffect(() => {
    if (mylocation.lat === 0) return;
    setStores(DummyData(mylocation.lat, mylocation.lng));
  }, [mylocation]);

  return (
    <section>
      <h2 className="sr-only">내 주변 착한가게를 찾을 수 있습니다.</h2>
      <div className="flex h-[100vh]">
        <SideMenu></SideMenu>
        <div className="relative flex-1">
          <div className="absolute top-5 left-[50%] z-50 w-full -translate-x-[50%]">
            <Navigation value={category} onChange={setCategory} InitializePage={() => {}} />
          </div>
          <Map type="search" store={stores} handleMyLocation={handleMyLocation} />
        </div>
      </div>
    </section>
  );
}
