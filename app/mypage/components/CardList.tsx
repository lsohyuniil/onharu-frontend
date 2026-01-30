"use client";

import { Button } from "@/components/ui/Button";
import { RiArrowRightSLine } from "@remixicon/react";
import { useRouter } from "next/navigation";

interface CardListItem {
  title?: string;
  subtitle?: string;
}

interface CardListProps {
  title: string;
  items?: CardListItem[];
  link?: string;
  emptyTitle?: string;
  emptySubtitle?: string;
  emptyButtonText?: string;
  emptyLink?: string;
}

export default function CardList({
  title,
  items = [],
  link,
  emptyTitle,
  emptySubtitle,
  emptyButtonText,
  emptyLink,
}: CardListProps) {
  const router = useRouter();
  const hasItems = items.length > 0;

  const handleEmptyButtonClick = () => {
    if (emptyLink) router.push(emptyLink);
  };

  const handleItemClick = () => {
    if (link) router.push(link);
  };

  return (
    <div>
      <div className="mb-4 text-base font-bold sm:mb-8 sm:text-lg">{title}</div>

      {!hasItems ? (
        <div className="flex flex-col items-center gap-4 rounded-[10px] border bg-white py-10 text-center">
          {emptyTitle && <p className="sm:text-md text-sm font-medium">{emptyTitle}</p>}
          {emptySubtitle && (
            <p className="text-text-secondary text-xs sm:text-sm">{emptySubtitle}</p>
          )}
          {emptyButtonText && emptyLink && (
            <Button
              onClick={handleEmptyButtonClick}
              varient="default"
              width="md"
              height="md"
              fontSize="sm"
            >
              {emptyButtonText}
            </Button>
          )}
        </div>
      ) : (
        items.map((item, idx) => (
          <div
            key={idx}
            onClick={handleItemClick}
            className="mb-3 flex transform cursor-pointer items-center justify-between rounded-[10px] border bg-white p-3 transition-transform duration-300 hover:scale-[1.01] sm:mb-5 sm:p-5"
          >
            <div className="flex flex-col gap-2.5 font-medium">
              {item.title && <p className="sm:text-md text-sm">{item.title}</p>}
              {item.subtitle && <p className="text-xs sm:text-base">{item.subtitle}</p>}
            </div>
            <RiArrowRightSLine className="text-text-secondary h-5 w-5 sm:h-7.5 sm:w-7.5" />
          </div>
        ))
      )}
    </div>
  );
}
