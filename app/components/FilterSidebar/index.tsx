"use client";
import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Slider, Select, Tooltip } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

import "./FilterSidebar.css";
import SearchInput from "../Search";
import Button from "../Button";
import { Filters } from "@/constants/Filters";

type FilterSearch = {
  textSearch?: string;
  theme?: string;
  tier?: string;
  time?: string;
  price?: string;
  keyword?: string;
  rangePrice?: number[];
};

type FilterType = object;

interface FilterSideBarProps {
  onResetFilter: () => void;
  onApplyFilter: (params: FilterSearch) => void;
}

const FilterSidebar: React.ForwardRefRenderFunction<
  FilterType,
  FilterSideBarProps
> = ({ onResetFilter, onApplyFilter }, ref) => {
  const [filterApply, setFilterApply] = useState<FilterSearch>({
    rangePrice: [0, 200],
  });

  useImperativeHandle(
    ref,
    () => ({
      resetFilter: () =>
        setFilterApply({
          rangePrice: [0, 200],
        }),
    }),
    []
  );

  const onFilterChange = ({
    key,
    option,
  }: {
    key: string;
    option: string | number[];
  }) => {
    setFilterApply({
      ...filterApply,
      [key]: option,
    });
  };

  const _resetFilter = () => {
    setFilterApply({
      rangePrice: [0, 200],
    });
    onResetFilter({});
  };

  return (
    <div className="w-full max-w-xs p-4 text-white sticky top-0 h-screen">
      {/* Quick Search */}
      <div className="mb-4 search-input">
        <SearchInput
          value={filterApply.keyword || ""}
          onChange={(e) =>
            onFilterChange({ key: "keyword", option: e.target.value })
          }
        />
      </div>
      {/* Price Slider */}
      <div className="mb-4">
        <div className="text-sm mb-2">PRICE</div>
        <Slider
          range
          // defaultValue={[0.01, 200]}
          value={filterApply.rangePrice}
          min={0.01}
          max={200}
          onChange={(val) => {
            onFilterChange({ key: "rangePrice", option: val });
          }}
          className="custom-slider"
          tooltip={{
            formatter: (val) => (
              <Tooltip title={`${val} ETH`}>
                <span className="bg-red text-white px-2 py-1 rounded">
                  {val} ETH
                </span>
              </Tooltip>
            ),
          }}
        />
        <div className="flex justify-between text-xs">
          <span>0.01 ETH</span>
          <span>200 ETH</span>
        </div>
      </div>
      {/* Dropdown Filters */}
      {Filters.map(
        (
          filter: {
            key: string;
            label: string;
            options: { label: string; value: string }[];
          },
          index
        ) => (
          <div className="mb-4 filter-select-wrapper" key={index}>
            <div className="select-label">{filter.label}</div>
            <Select
              className="w-full"
              placeholder="Select a person"
              value={filterApply?.[filter.key]}
              onChange={(value: string) => {
                onFilterChange({ key: filter.key, option: value });
              }}
            >
              {filter.options.map((option) => (
                <Select.Option value={option.value} key={option.value}>
                  {option.label}
                </Select.Option>
              ))}
            </Select>
          </div>
        )
      )}
      {/* Reset Button */}
      <div className="mt-6 flex flex-row align-items-center justify-between">
        <div className="btn-reset-filter" onClick={_resetFilter}>
          <CloseCircleFilled />
          <span className="label-text">Reset filter</span>
        </div>
        <Button label="Search" onClick={() => onApplyFilter(filterApply)} />
      </div>
    </div>
  );
};

export default forwardRef(FilterSidebar);
