import React, { useEffect, useRef } from "react";
import Image from "next/image";
interface ModalProps {
  children: React.ReactNode;
  close: (value: boolean) => void;
}
export const Modal = ({ children, close }: ModalProps) => {
  const modalRef: any = useRef();

  useEffect(() => {
    let handler = (e: { target: any }) => {
      if (!modalRef.current.contains(e.target)) {
        close && close(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="fixed z-1 left-0 top-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.4)]">
      <div className="relative lg:left-[15%] top-[30%] bg-primary lg:w-[70%] p-6 rounded-md z-[999]" ref={modalRef}>
        <Image
          src="/close.png"
          alt="close"
          width={20}
          height={20}
          className="cursor-pointer absolute right-4"
          onClick={() => close(false)}
        />
        {children}
      </div>
    </div>
  );
};
