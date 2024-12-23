import React from "react";

const Background = () => {
  return (
    <div className="fixed z-[2] w-full h-screen ">
      <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold ">
        Take a Note.
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] tracking-tighter leading-none font-semibold text-zinc-900">
        Notes.
      </div>
    </div>
  );
};

export default Background;
