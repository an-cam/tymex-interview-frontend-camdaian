"use client";

import "./page.css";
import {
  Navbar,
  CardList,
  Footer,
  FilterSidebar,
  Category,
} from "@/components/index";
import { useFetchProducts } from "@/hooks/useFetchProducts";
import { useEffect, useRef } from "react";

type FilterParams = {
  page: number;
  perPage: number;
  category?: string;
};

type FilterSearch = {
  theme?: string;
  tier?: string;
  time?: string;
  price?: string;
  keyword?: string;
  rangePrice?: number[];
};

export default function Home() {
  const filter = useRef<FilterParams>({
    page: 1,
    perPage: 10,
  });
  const filterBarRef = useRef<{
    resetFilter: () => void;
  }>(null);

  const { data, loading, fetchProducts, refreshProducts, hasLoadMore } =
    useFetchProducts();

  useEffect(() => {
    fetchProducts(filter.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLoadMore = () => {
    const currentPage = filter.current.page;
    filter.current = {
      ...filter.current,
      page: currentPage + 1,
    };
    fetchProducts(filter.current);
  };

  const onApplyFilter = (params: FilterSearch) => {
    filter.current = {
      ...filter.current,
      ...params,
      page: 1,
      perPage: 10,
    };
    refreshProducts(filter.current);
  };

  const onResetFilter = () => {
    const resetFilter = {
      page: 1,
      perPage: 10,
    } as FilterParams;
    if (filter.current.category) {
      resetFilter.category = filter.current.category;
    }
    filter.current = resetFilter;
    filterBarRef?.current?.resetFilter();
    refreshProducts(filter.current);
  };

  const onChange = (catId: string) => {
    if (catId === "All" || !catId) {
      delete filter.current.category;
    } else {
      filter.current = {
        ...filter.current,
        page: 1,
        perPage: 10,
        category: catId,
      };
    }
    refreshProducts(filter.current);
  };

  return (
    <div className="mk-wrapper">
      <div className="mk-container">
        <div className="mk-wl">
          <div className="mk-bg"></div>
        </div>
        <div className="mk-content-wrapper">
          <header className="header-bg">
            <Navbar />
          </header>
          <div className="flex md:p-0 lg:p-20 h-full">
            <div className="relative whitespace-nowrap">
              <div className="hidden duration-500 left-0 md:flex flex-col gap-4 sticky overflow-x-hidden overflow-y-auto transition-[width] h-[calc(100vh-169px)] top-[139px] w-[300px]">
                <FilterSidebar
                  ref={filterBarRef}
                  onResetFilter={onResetFilter}
                  onApplyFilter={onApplyFilter}
                />
              </div>
            </div>
            <div className="fixed md:hidden bottom-8 left-0 z-40 w-full justify-center flex">
              <button className="bg-black text-white rounded-full py-3 px-6 items-center inline-flex gap-2">
                <svg
                  viewBox="0 0 28 28"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  className="fill-white"
                >
                  <path d="M17 19a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2h6Zm4-6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h14Zm3-6a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2h20Z"></path>
                </svg>
                Edit filters
              </button>
            </div>
            <div className="flex-1 p-4 md:p-0 md:px-4 pt-4 overflow-hidden">
              <Category onChange={onChange} />
              <CardList
                data={data}
                isLoading={loading}
                onLoadMore={onLoadMore}
                hasLoadMore={hasLoadMore}
                onResetFilter={onResetFilter}
              />
            </div>
          </div>
          <div className="w-full relative">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
