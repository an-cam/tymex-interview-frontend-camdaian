import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import "./Search.css";

type SearchInputProps = {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <Input
      placeholder="Quick search"
      onChange={onChange}
      value={value}
      prefix={<SearchOutlined style={{ color: "#808080" }} />} // Gray icon
      style={{
        borderRadius: "8px", // Rounded corners
        backgroundColor: "#000000B2", // Semi-transparent black background
        color: "#fff", // White text
        border: "1px solid #555", // Border color similar to the design
        height: "40px", // Adjust height as needed
      }}
    />
  );
};

export default SearchInput;
