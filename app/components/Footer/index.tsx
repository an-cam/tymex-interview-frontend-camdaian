import React from "react";
import { Input, Button } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

import './Footer.css';

const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper">
      <img src="marketplace/footer.png" className="footer-image"/>
      <div className="bg-black text-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Navigation Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">NAVIGATION</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About us</li>
              <li>Our teams</li>
              <li>Whitepaper</li>
              <li>Marketplace</li>
              <li>Roadmap</li>
              <li>FAQs</li>
              <li>News</li>
              <li>Community</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">CONTACT US</h4>
            <p className="flex items-center space-x-2">
              <PhoneOutlined />
              <span>01234568910</span>
            </p>
            <p className="flex items-center space-x-2 mt-2">
              <MailOutlined />
              <span>tymex-talent@tyme.com</span>
            </p>
          </div>

          {/* Subscribe Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">
              SUBSCRIBE TO RECEIVE OUR LATEST UPDATE
            </h4>
            <div className="flex flex-col sm:flex-row items-center sm:items-stretch">
              <Input
                placeholder="Your email address"
                className="rounded-t-lg sm:rounded-l-lg sm:rounded-r-none bg-black border border-gray-500 text-white mb-4 sm:mb-0 sm:mr-2"
              />
              <Button className="rounded-b-lg sm:rounded-r-lg sm:rounded-l-none bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 w-full sm:w-auto">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-sm flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>©2023 Tyme - Edit. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-6">
            <p>Security</p>
            <p>Legal</p>
            <p>Privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
