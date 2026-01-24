"use client";

import { SectionTitle } from "./shared/SectionTitle";
import { Card } from "@/components/ui/card/Card";
import { Category } from "@/components/ui/card/Category";
import { HashTag } from "@/components/ui/card/HashTag";

export const CharityShop = () => {
  return (
    <>
      <section className="mt-section-lg-top">
        <div className="wrapper">
          <SectionTitle title="나눔 가게" />
          <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-4">
            <Card
              storename="우지커피"
              storeIntroduce="그려요"
              category={<Category category="의료" />}
              hashtags={<HashTag tags={["검진", "치과"]} />}
            />
            <Card
              storename="우지커피"
              storeIntroduce="그려요"
              category={<Category category="의료" />}
              hashtags={<HashTag tags={["검진", "치과"]} />}
            />
            <Card
              storename="우지커피"
              storeIntroduce="그려요"
              category={<Category category="의료" />}
              hashtags={<HashTag tags={["검진", "치과"]} />}
            />
            <Card
              storename="우지커피"
              storeIntroduce="그려요"
              category={<Category category="의료" />}
              hashtags={<HashTag tags={["검진", "치과"]} />}
            />
          </div>
        </div>
      </section>
    </>
  );
};
