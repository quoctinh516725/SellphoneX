import React from "react";

const Loading = () => {
  return (
    <div className="w-full sm:max-w-[1200px] mx-auto">
      <div className="space-y-3 animate-pulse">
        <div className="h-16 w-full rounded bg-gray-200"></div>
        <div className="h-24 w-full rounded bg-gray-200"></div>
        <div className="h-screen w-full rounded bg-gray-200"></div>
      </div>
    </div>
  );
};

export default Loading;
