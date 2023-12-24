import Image from "next/image";

export const Cover = ({ children, background }) => {
  return (
    <div
      className="h-screen bg-slate-800 relative min-h-[400px]
    justify-center items-centers 
    "
    >
      <Image
        alt="Cover"
        src={background}
        layout="fill"
        objectFit="covers"
        className="mix-blend-soft-light"
      />
      {children}
    </div>
  );
};
