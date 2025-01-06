"use client";

import React from "react";
import styled from "styled-components";
import { Button as TempleteButton } from "antd";

import "./Button.css";

const CustomButton = styled(TempleteButton)`
  border-radius: 4px;
  background: linear-gradient(
    90deg,
    rgba(218, 69, 143, 1),
    rgba(218, 52, 221, 1)
  );
  color: rgba(255, 255, 255, 1);
  border: none;
  padding: 8px 24px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  transition: background-color 0.2s ease, transform 0.2s ease;
  &:hover {
    opacity: 0.9;
    background: linear-gradient(
      90deg,
      rgba(218, 69, 143, 1),
      rgba(218, 52, 221, 1)
    ) !important;
    color: rgba(255, 255, 255, 1) !important;
  }
`;

type ButtonProps = {
  label: string;
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, width, height, onClick }) => {
  return <CustomButton style={{ width, height }} onClick={onClick}>{label}</CustomButton>;
};

export default Button;
