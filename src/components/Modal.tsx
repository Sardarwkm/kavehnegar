import React, { ReactNode } from "react";

interface Props {
  show: boolean;
  children?: ReactNode;
  handleSubmit: () => void;
  handleCancel: () => void;
  confirmDisabled: boolean;
  confirmLoading: boolean;
}
const Modal = ({
  show,
  children,
  handleSubmit,
  handleCancel,
  confirmDisabled,
  confirmLoading,
}: Props) => {
  return (
    <div
      onClick={() => !confirmLoading && handleCancel()}
      className={`fixed inset-0 flex justify-center items-center transition-all ${
        show ? "block bg-black/30  " : "invisible  "
      }`}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={` w-[80%] lg:w-[60%] min-h-[60%] md:min-h-[55%] bg-white rounded shadow p-6 transition-all 
            ${show ? "scale-100 opacity-100 " : "scale-0  opacity-0"}`}>
        {children}
        <div className='mt-4 w-[100%] flex justify-center gap-8'>
          <button
            onClick={handleSubmit}
            disabled={confirmDisabled || confirmLoading}
            className='px-6 text-white py-2 bg-teal-600 rounded disabled:text-gray-500 disabled:bg-neutral-300'>
            Post
          </button>
          <button
            onClick={handleCancel}
            className='px-6 text-white py-2 bg-rose-600 rounded'>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
