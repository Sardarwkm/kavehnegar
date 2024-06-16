import React from "react";

const Modal = ({
  show,
  children,
  handleSubmit,
  handleCancel,
  confirmDisabled,
}) => {
  return (
    <div
      onClick={() => handleCancel(false)}
      className={`fixed inset-0 flex justify-center items-center transition-all ${
        show ? "block bg-black/30  " : "invisible  "
      }`}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-[80%] lg:w-[50%] h-[50%] bg-white rounded shadow p-6 transition-all 
            ${show ? "scale-100 opacity-100" : "scale-0  opacity-0"}`}>
        {children}
        <div className='absolute bottom-3 w-full flex justify-center gap-8'>
          <button
            onClick={handleSubmit}
            disabled={confirmDisabled}
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
