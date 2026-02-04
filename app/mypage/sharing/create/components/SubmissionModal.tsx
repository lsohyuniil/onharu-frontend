import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

export function SubmissionModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <Modal onClick={onClose}>
      <div className="flex flex-col items-center gap-2 sm:gap-4">
        <p className="mb-5 text-center font-medium break-keep sm:mb-10 sm:text-lg">
          나눔 등록이 완료되었습니다.
        </p>
        <Button varient="default" width="lg" height="md" fontSize="sm" onClick={onClose}>
          확인
        </Button>
      </div>
    </Modal>
  );
}
