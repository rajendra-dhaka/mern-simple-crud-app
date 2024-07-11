const CardWrapper = ({ children }) => {
  return (
    <div className="bg-slate-200 min-w-[28rem] rounded-lg p-4 flex flex-col gap-2 overflow-auto">
      {children}
    </div>
  );
};

export default CardWrapper;
