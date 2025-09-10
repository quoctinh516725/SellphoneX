const Modal = ({ children, isOpen, onClose, className }) => {
  return (
    isOpen && (
      <div
        className={`absolute top-15 min-w-[300px] bg-white p-3 rounded-xl ${className}`}
      >
        {children}
      </div>
    )
  );
};

export default Modal;
