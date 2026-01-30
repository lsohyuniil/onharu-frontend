import { Exeption } from "../shared/Exeption";
import { Button } from "@/components/ui/Button";
export default function ReservationSuccess() {
  return (
    <Exeption
      imageSrc="/image/character/squirrel-happy.png"
      contents={
        <>
          나눔예약이 접수되었습니다. <br /> 사장님이 수락하면 알려드릴게요!
        </>
      }
      button={
        <Button varient="default" fontSize="md" width="md" height="md">
          예약 내역 보러가기
        </Button>
      }
    />
  );
}
