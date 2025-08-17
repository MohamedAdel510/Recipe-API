import React, { useEffect, useState } from "react";
import Recipe from "./../Recipe/Recipe";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

export default function Home() {


  const Categories = [
    "Beef",
    "Breakfast",
    "Chicken",
    "Dessert",
    "Goat",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
  ];

  return (
    <>
      <h1 className=" text-start text-3xl font-bold bg-gradient-to-r from-[#f19524] to-[#c90519] bg-clip-text text-transparent">
        Learn, Cook, Eat Your Food
      </h1>

      <ul className="sm:flex hidden mt-8 flex-wrap gap-4  font-medium text-center text-gray-500 border-b border-gray-200">
        <li className="me-2">
          <Link
            aria-current="page"
            className="inline-block catLink px-4 py-2  border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 active"
            to="/"
            data-discover="true"
          >
            All
          </Link>
        </li>
        {Categories.map((cat, indx) => (
          <li key={indx} className="me-2">
            <Link
              aria-current="page"
              className="inline-block catLink px-4 py-2  border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 active"
              to={`category/${cat}`}
              data-discover="true"
            >
              {cat}
            </Link>
          </li>
        ))}
      </ul>

      <Outlet/>


    </>
  );
}
