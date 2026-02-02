"use client";

import { useState, ReactNode } from "react";
import TabFilter from "@/components/ui/TabFilter";

export interface TabItem {
  label: string;
  value: string;
}

interface Props<T> {
  items: T[];
  tabs: TabItem[];
  filterKey: keyof T;
  render: (filteredItems: T[], activeValue: string) => ReactNode;
  defaultValue?: string;
}

export default function FilteredTabSection<T>({
  items,
  tabs,
  filterKey,
  render,
  defaultValue = "ALL",
}: Props<T>) {
  const [active, setActive] = useState(defaultValue);

  const filteredItems =
    active === "ALL" ? items : items.filter(item => String(item[filterKey]) === active);

  return (
    <>
      <TabFilter tabs={tabs} status={active} setStatus={setActive} />
      {render(filteredItems, active)}
    </>
  );
}
