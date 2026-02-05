import { Button } from "@/components/ui/Button";

interface Props {
  sender: string;
  onBack: () => void;
}

export function ChatHeader({ sender, onBack }: Props) {
  return (
    <div className="border-border flex items-center justify-between border-b p-3.75 sm:p-7.5">
      <div className="text-md font-semibold sm:text-xl">{sender}</div>
      <Button varient="default" width="sm" height="sm" fontSize="sm" onClick={onBack}>
        나가기
      </Button>
    </div>
  );
}
