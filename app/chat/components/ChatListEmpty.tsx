"use client";

import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ChatListEmpty() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="mb-6 text-center text-base font-bold sm:text-xl">
        <div>아직 시작된 대화가 없어요.</div>
        <div>필요할 때 편하게 채팅해 보세요.</div>
      </div>
      <Button
        varient="default"
        width="md"
        height="md"
        fontSize="md"
        onClick={() => router.push("/charitystore")}
      >
        나눔 가게 둘러보기
      </Button>
      <Image
        src="/image/character/squirrel-happy.png"
        alt=""
        width={200}
        height={200}
        className="mt-3.75"
      />
    </div>
  );
}
