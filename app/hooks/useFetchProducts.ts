import { useState } from "react";
import { AxiosError } from "axios";
import axiosClient from "@/utils/apiClient";

import { Product } from "@/types/products";

type paramsFetchProducts = {
  page: number;
  perPage: number;
  category?: string;
  tier?: string;
  theme?: string;
  price?: string;
  time?: string;
  keyword?: string;
  rangePrice?: number[];
};

interface UseFetchProductsResult {
  data: Product[];
  loading: boolean;
  error: string | null;
  hasLoadMore: boolean;
  refreshProducts: (params: paramsFetchProducts) => void;
  fetchProducts: (params: paramsFetchProducts) => void;
}

export const useFetchProducts = (): UseFetchProductsResult => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [hasLoadMore, setHasLoadMore] = useState<boolean>(true);

  const fetchProducts = async ({
    page,
    perPage,
    category,
    tier,
    theme,
    time,
    price,
    keyword,
    rangePrice
  }: paramsFetchProducts) => {
    setLoading(true);
    setError(null);
    try {
      let endpoint = `/products?_page=${page}&_per_page=${perPage}`;
      if (category) {
        endpoint = endpoint + `&category=${category}`;
      }
      if (tier) {
        endpoint = endpoint + `&tier=${tier}`;
      }
      if (theme) {
        endpoint = endpoint + `&theme=${theme}`;
      }
      if (keyword) {
        endpoint = endpoint + `&title=${keyword}`;
      }
      if (rangePrice) {
        endpoint = endpoint + `&price_lte=${rangePrice[1]}&price_gte=${rangePrice[0]}`;
      }
      if (time || price) {
        if (time && price) {
          const orderTime = time === "latest" ? "createdAt" : "-createdAt";
          const orderPrice = price === "latest" ? "price" : "-price";
          endpoint = endpoint + `&_sort=${orderTime},${orderPrice}`;
        } else if (time) {
          const orderTime = time === "latest" ? "createdAt" : "-createdAt";
          endpoint = endpoint + `&_sort=${orderTime}`;
        } else {
          const orderPrice = price === "latest" ? "price" : "-price";
          endpoint = endpoint + `&_sort=${orderPrice}`;
        }
      }
      const res = await axiosClient.get(endpoint);
      if (res.status === 200 && res?.data?.length) {
        setHasLoadMore(true);
        if (page === 1) {
          setData(res?.data);
        } else {
          setData(data.concat(res?.data));
        }
      } else {
        setHasLoadMore(false);
      }
    } catch (err) {
      const error = err as AxiosError;
      setError(error?.message || "Failed to fetch prices. Please try again.");
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const refreshProducts = async ({
    page,
    perPage,
    category,
    tier,
    theme,
    time,
    price,
    keyword,
    rangePrice,
  }: paramsFetchProducts) => {
    setData([]);
    setLoading(true);
    setError(null);
    setHasLoadMore(true);
    fetchProducts({ page, perPage, category, tier, theme, time, price, keyword, rangePrice });
  };

  return { data, loading, error, fetchProducts, refreshProducts, hasLoadMore };
};
