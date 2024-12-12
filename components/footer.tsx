import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 body-font">
        <div id="contact" className="container px-5 py-8 mx-auto flex flex-col items-center md:flex-row md:items-start md:justify-between text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">Smart Elo Co., Ltd.</h2>
            <p className="text-sm md:text-base flex flex-col items-center md:items-start mb-2">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-400 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                  />
                </svg>
                100/47 หมู่ที่ 12 ตำบลลำตาเสา อำเภอวังน้อย จ.พระนครศรีอยุธยา 13170
              </span>
            </p>

            <p className="text-sm md:text-base flex-col items-center">
              <span className="mr-2">
                <i className="fab fa-google text-red-500"></i>
              </span>
              admin@smart-elo-th.com
            </p>


            <p className="text-sm md:text-base flex-col items-center">
              <span className="mr-2"></span> ติดต่อ : 082-080-28808
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm md:text-base text-center md:text-left">
              &copy; 2024 Smart Elo Co., Ltd. All rights reserved.
            </p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
