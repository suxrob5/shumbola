const Begin = ({ value, className }: { value: string, className?: string }) => {
  return (
    <div className={`flex items-center justify-center sm:mt-[250px] mt-[150px] max-w-[1920px] w-[80%] mx-auto ${className}`}>
      <h1 className="text-[#368BC6] text-4xl sm:text-5xl md:text-[70px] font-extrabold text-center uppercase tracking-wider">{value}</h1>
    </div>
  );
};

export default Begin;
