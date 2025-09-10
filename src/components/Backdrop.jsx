import React from "react";

const Backdrop = ({ isOpen, onClose, className }) => {
  return (
    isOpen && (
      <div onClick={onClose} className="fixed inset-0 bg-black/40 z-10"></div>
    )
  );
};

export default Backdrop;
