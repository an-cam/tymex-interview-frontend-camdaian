import React from "react";
import Card from "../Card";
import CardSkeleton from "../CardSkeleton";

import Button from "../Button";
import { Product } from "@/types/products";

type CardListProps = {
  data: Product[];
  isLoading: boolean;
  hasLoadMore: boolean;
  onLoadMore: () => void;
  onResetFilter: () => void;
};

const CardList: React.FC<CardListProps> = ({
  data,
  isLoading,
  onLoadMore,
  hasLoadMore,
  onResetFilter,
}) => {
  return (
    <div className="pb-[100px] pt-4">
      <div className="grid gap-6 overflow-visible grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4">
        {data.map((item: Product, index: number) => (
          <Card
            title={item.title}
            key={index}
            price={item.price}
            category={item.category}
            authorFirstName={item.author.firstName}
            authorLastName={item.author.lastName}
            authorAvatar={item.author.avatar}
            authorOnlineStatus={item.author.onlineStatus}
            isFavorite={item.isFavorite}
          />
        ))}
        {/* Show skeleton cards while loading */}
        {isLoading &&
          Array.from({ length: 10 }).map((_, index) => (
            <CardSkeleton key={`skeleton-${index}`} />
          ))}
      </div>
      {!data.length && !isLoading && !hasLoadMore && (
        <div className="w-full flex flex flex-col	 items-center justify-center">
          <span className="text-lg mb-10 mt-10">
            No items found for this search
          </span>
          <Button label="Back to all items" onClick={onResetFilter} />
        </div>
      )}
      {!isLoading && hasLoadMore && (
        <div className="w-full flex justify-center content-center mt-20">
          <Button
            label="View more"
            width={326}
            height={70}
            onClick={onLoadMore}
          />
        </div>
      )}
    </div>
  );
};

export default CardList;
