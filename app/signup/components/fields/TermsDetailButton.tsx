import useModal from "@/hooks/useModal";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

type TermsDetailButtonProps = {
  title: string;
  children: React.ReactNode;
};

export default function TermsDetailButton({ title, children }: TermsDetailButtonProps) {
  const { open, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <button type="button" onClick={handleOpenModal} className="text-text-secondary text-sm">
        자세히 보기
      </button>

      {open && (
        <Modal onClick={handleCloseModal}>
          <h3 id="modal-title" className="mb-4 text-center text-2xl font-bold">
            {title}
          </h3>

          <div className="mb-8 max-h-[60vh] overflow-y-auto rounded-[10px] border p-6 text-sm">
            {children}
          </div>

          <Button varient="default" width="lg" height="md" fontSize="md" onClick={handleCloseModal}>
            확인
          </Button>
        </Modal>
      )}
    </>
  );
}
