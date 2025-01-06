import React from "react";
import CardNewArrival from "./CardNewArrival";
import data from "./dummyData.json";

type newArrivalNFT = {
  id: string;
  image: string;
  title: string;
};

const NewArrival: React.FC = () => {
  return (
    <div className="relative">
      <div className="relative text-white overflow-hidden">
        <div className="container mx-auto px-6 py-16 lg:flex lg:items-center">
          <div className="lg:w-1/2">
            <img src={`/newarrival/new_arrival.png`} alt="bg-image" />
          </div>
        </div>
      </div>
      <div className="new-arrival-wrapper flex flex-1 md:px-0 lg:px-20">
        <div className="flex flex-row w-70 pt-18">
          <div className="grid gap-10 overflow-visible grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4">
            {data.map((nft: newArrivalNFT) => {
              return (
                <CardNewArrival
                  key={nft.id}
                  image={nft.image}
                  title={nft.title}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-20">
        <div className="relative">
          <img
            src={`/newarrival/nft-hgithlight.png`}
            alt="bg-image"
            className="hightlight-nft"
          />
          <div className="absolute bottom-1 flex items-center justify-center w-full">
            <img
              src={`/newarrival/bg-title-nft.png`}
              alt="bg-image"
              width={320}
            />
=            <span className="absolute title-hightlight">THE DJ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
