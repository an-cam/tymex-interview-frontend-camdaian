"use client";

import React, { useState } from "react";
import "./Navbar.css";

import Button from "../Button";
import { Dropdown, Menu } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import data from "./Navvbar.dummydata.json";
import NewArrival from "../NewArrival";

type navItem = {
  label: string;
  path: string;
};

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("marketplace");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onNav = (path: string) => {
    setActive(path);
  };
  const languageMenu = (
    <Menu
      items={[
        { key: "1", label: "English" },
        { key: "2", label: "Vietnamese" },
      ]}
    />
  );
  return (
    <nav className="navbar-wrapper sticky top-0">
      {/* Desktop and Tablet View */}
      <div className="container mx-auto flex items-center justify-between p-4 md:flex">
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <MenuOutlined
            className="text-2xl cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {data.map((nav: navItem) => {
            return (
              <div key={nav.path} onClick={() => onNav(nav.path)}>
                <a
                  href={`#${nav.path}`}
                  className={`label-navbar ${
                    active === nav.path ? "active" : ""
                  }`}
                >
                  {nav.label}
                </a>
                {active === nav.path && <div className="undeline active" />}
              </div>
            );
          })}
        </div>

        {/* Connect Wallet and Language */}
        <div className="flex items-center space-x-4">
          <Button label="Connect Wallet" />

          <Dropdown overlay={languageMenu} trigger={["click"]}>
            <a
              onClick={(e) => e.preventDefault()}
              className="flex items-center"
            >
              <DownOutlined className="ml-1" />
            </a>
          </Dropdown>
        </div>
      </div>

      {/* Mobile View */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black p-4">
          {data.map((nav: navItem) => {
            return (
              <div key={nav.path} className="flex-col ml-8 mb-4">
                <a
                  href={`#${nav.path}`}
                  className={`label-navbar ${
                    active === nav.path ? "active" : ""
                  }`}
                  onClick={() => onNav(nav.path)}
                >
                  {nav.label}
                </a>
                {active === nav.path && <div className="undeline active" />}
              </div>
            );
          })}
        </div>
      )}
      <NewArrival />
    </nav>
  );
};

export default Navbar;
