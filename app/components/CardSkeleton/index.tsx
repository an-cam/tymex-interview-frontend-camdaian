/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";


const CardSkeleton: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full card-wrapper transition-all transition-transform transform hover:-translate-y-2 duration-500 p-4">
        <div className="h-48 bg-gray-700 rounded-lg animate-pulse"></div>
        <div className="mt-4 h-4 w-16 bg-gray-700 rounded animate-pulse"></div>
        <div className="mt-2 h-4 w-32 bg-gray-700 rounded animate-pulse"></div>
        <div className="mt-2 h-4 w-20 bg-gray-700 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
