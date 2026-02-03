import ReactFocusLock from "react-focus-lock";
import { RiCloseLine } from "@remixicon/react";

interface ModalProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const BaseClasses =
  "-translate-x-[50%] -translate-y-[50%] border border-border fixed top-[50%] left-[50%] z-99 rounded-md bg-white max-w-[calc(100vw-30px)] sm:max-w-[640px] w-full";

export const Modal = ({ children, onClick }: ModalProps) => {
  return (
    <ReactFocusLock>
      <div className="fixed inset-0 z-99 bg-black opacity-6" onClick={onClick} />
      <div className={BaseClasses} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="relative z-60">
          <button className="absolute top-7 right-6" aria-label="모달 닫기 버튼" onClick={onClick}>
            <RiCloseLine size={30} />
          </button>
          <div className="scrollbar-thin max-h-[calc(100vh-110px)] overflow-y-auto px-[50px] py-[55px]">
            {children}
          </div>
        </div>
      </div>
    </ReactFocusLock>
  );
};
