/* eslint-disable @next/next/no-img-element */
import React from "react";

import "./NewArrival.css";

interface CardNewArrivalProps {
  image: string;
  title: string;
}

const CardNewArrival: React.FC<CardNewArrivalProps> = ({ image, title }) => {
  return (
    <div className="cursor-pointer w-full h-full flex flex-col items-center justify-center mt-8">
      <div className="relative">
        <span className="card-nft-image-wrapper">
          <img src={`/newarrival/nft_bg.png`} alt="bg-image" className="box" />
        </span>
        <div className="absolute bottom-1">
          <img
            src={image}
            alt="Logo"
            className="object-contain transform sm:group-one-hover:scale-110 transition-all sm:duration-300 pointer-events-none select-none opacity-100"
          />
        </div>
      </div>
      <span className="mt-6 title-new-arrial-nft">{title}</span>
    </div>
  );
};

export default CardNewArrival;
