/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useMemo } from "react";
import styled from "styled-components";

import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { CARD_BACKGROUND } from "@/constants/CardBackground";

import "./Card.css";

function getRandomOneToFive() {
  return Math.floor(Math.random() * 5) + 1;
}
interface CardProps {
  start: string;
  end: string;
}

interface NFTCardProps {
  title: string;
  price: number;
  category: string;
  authorFirstName: string;
  authorLastName: string;
  authorAvatar: string;
  authorOnlineStatus: string;
  isFavorite: boolean;
}

const Card = styled.div<CardProps>`
  border-radius: 4px;
  background: linear-gradient(
    90deg,
    ${(props) => props.start},
    ${(props) => props.end}
  );
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NFTCard: React.FC<NFTCardProps> = ({
  title,
  price,
  category,
  authorFirstName,
  authorLastName,
  authorAvatar,
  authorOnlineStatus,
  isFavorite,
}) => {
  const fullName = useMemo(
    () => authorFirstName + " " + authorLastName,
    [authorFirstName, authorLastName]
  ) as string;

  const ranIdx = useMemo(() => getRandomOneToFive(), []) as number;

  return (
    <div className="w-full h-full">
      <div className="w-full card-wrapper transition-all transition-transform transform hover:-translate-y-2 duration-500 p-4">
        <div className="relative">
          {/* Image */}
          <Card
            start={CARD_BACKGROUND?.[ranIdx]?.start}
            end={CARD_BACKGROUND[ranIdx].end}
          >
            {/* Badge */}
            <div className="flex flex-row justify-between w-full px-2 pt-2">
              <span className="label-wapper px-2 py-1">{category}</span>
              {/* Favorite Icon */}
              <div className="text-white">
                {isFavorite ? (
                  <HeartFilled className="text-lg cursor-pointer hover:text-red-500 transition-colors" />
                ) : (
                  <HeartOutlined className="text-lg cursor-pointer hover:text-red-500 transition-colors" />
                )}
              </div>
            </div>
            <span className="card-nft-image-wrapper">
              <img
                src={`/nft/nft${ranIdx}.png`}
                srcSet={`/nft/nft${ranIdx}.png, /nft/nft${ranIdx}@2x.png, /nft/nft${ranIdx}@3x.png`}
                alt="Logo"
                className="object-contain transform sm:group-one-hover:scale-110 transition-all sm:duration-300 pointer-events-none select-none opacity-100"
              />
            </span>
          </Card>

          <div className="mt-4">
            <div className="flex flex-row justify-between w-full">
              <span className="nft-name whitespace-nowrap overflow-hidden text-ellipsis hover:text-gray-200 transition-colors cursor-pointer">
                {title}
              </span>
              <div className="flex items-center justify-between text-gray-300 whitespace-nowrap">
                <span className="nft-price flex items-center">
                  <img
                    src="/logo_ethereum.png"
                    alt="ETH"
                    className="w-2 h-3 items-center gap-1 transform sm:group-one-hover:scale-110 transition-all sm:duration-300 pointer-events-none select-none opacity-100 mr-2"
                  />
                  {price} ETH
                </span>
              </div>
            </div>

            <div className="author-wrapper flex items-center gap-2 mt-4">
              <div className="relative">
                <img
                  src={authorAvatar || "/author/author_avatar.png"}
                  alt="Creator Avatar"
                  className="w-6 h-6 rounded-full	bg-white"
                />
                <img
                  src={
                    authorOnlineStatus === "online"
                      ? "/author/status_online.png"
                      : "/author/status_offline.png"
                  }
                  className="w-3 h-3 absolute -bottom-1 right-0 "
                />
              </div>

              <span className="text-sm">{fullName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
