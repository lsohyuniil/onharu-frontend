"use client";

import { Exeption } from "../shared/Exeption";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function ReservationFail() {
  const router = useRouter();

  return (
    <Exeption
      imageSrc="/image/character/squirrel-sad.png"
      contents={
        <>
          준비된 나눔이 모두 소진되었습니다. <br /> 다음에 다시 신청해 주세요.
        </>
      }
      button={
        <Button
          varient="default"
          fontSize="md"
          width="md"
          height="md"
          onClick={() => router.push("/")}
        >
          홈으로 이동
        </Button>
      }
      button2={
        <Button
          varient="dark"
          fontSize="md"
          width="md"
          height="md"
          onClick={() => router.push("/charitystore")}
        >
          주변 가게 찾기
        </Button>
      }
    />
  );
}
