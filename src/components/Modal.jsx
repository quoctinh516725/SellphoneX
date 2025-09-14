const Modal = ({ children, isOpen, className,radius="rounded-xl" }) => {
  return (
    isOpen && (
      <div
        className={`absolute top-15 min-w-[300px] w-max bg-white p-3 ${radius} ${className}`}
      >
        {children}
      </div>
    )
  );
};

export default Modal;
