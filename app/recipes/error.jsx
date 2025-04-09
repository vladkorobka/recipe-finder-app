"use client";

import { useEffect } from "react";

const ErrorHandler = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="bg-red-400 rounded-sm p-4 text-xl font-bold text-white">
        {error.message}
      </h1>
    </div>
  );
};

export default ErrorHandler;
