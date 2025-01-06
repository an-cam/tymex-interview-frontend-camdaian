"use client";
import React, { useState, useMemo } from "react";

import "./Category.css";
import { CategoryOptions } from "@/constants/Category";

interface CategoryProps {
  onChange: (catId: string) => void;
}

const CategorySelector: React.FC<CategoryProps> = ({ onChange }) => {
  const categories = useMemo(() => {
    return [{ label: "All", value: "All" }].concat(CategoryOptions);
  }, []);
  const [active, setActive] = useState("All");

  const onCatActive = (cat: string) => {
    setActive(cat);
    onChange(cat);
  };

  return (
    <div className="whitespace-nowrap flex p-4 overflow-visible overflow-x-scroll cat-wrapper">
      {categories.map((category: { label: string; value: string }) => (
        <div
          key={category.value}
          className={`btn-cat text-white rounded-md px-4 py-2 mr-4 ${
            active === category.value ? "active" : ""
          }`}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            onCatActive(category.value);
            e.stopPropagation();
          }}
        >
          <span>{category.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CategorySelector;
