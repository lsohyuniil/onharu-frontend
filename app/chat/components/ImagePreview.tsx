"use client";

import Image from "next/image";

interface Props {
  previewUrl: string;
  onRemove: () => void;
}

export function ImagePreview({ previewUrl, onRemove }: Props) {
  return (
    <div className="relative m-2 w-fit">
      <div className="relative h-25 w-50">
        <Image
          src={previewUrl!}
          alt="preview"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-[10px]"
        />
      </div>

      <button
        onClick={onRemove}
        className="bg-main absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white"
      >
        ✕
      </button>
    </div>
  );
}
