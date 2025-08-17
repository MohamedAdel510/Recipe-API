import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

export default function Footer() {
  return (
    <>
      <footer className="bg-white absolute start-0 end-0  z-50 shadow-sm ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src={logo}
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                Recipe
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
              <li>
                <Link to="#" className="hover:underline me-4 md:me-6 text-2xl text-blue-500">
                  Route
                </Link>
              </li>

            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center ">
            © 2023{" "}
            <Link to="/https://www.facebook.com/mohamed.adel.780653/" target="_blank" className="hover:underline">
              Mohamed Adel
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
