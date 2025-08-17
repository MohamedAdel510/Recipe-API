import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaYoutube } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { useParams, Link } from "react-router-dom";

export default function RecipeDetails() {
  const { id } = useParams();
  const [Meal, setMeal] = useState(null);
  const [Ingrredients, setIngrredients] = useState(null);

  function getMaelById() {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        const [resMeal] = response.data.meals;
        setMeal(resMeal);
        let parsIng = [];
        for (let i = 1; i <= 20; i++) {
          if (resMeal[`strIngredient${i}`] != "") {
            const ingrediant = resMeal[`strIngredient${i}`];
            const masure = resMeal[`strMeasure${i}`];
            parsIng.push({ingrediant, masure});
          }
        }
        setIngrredients(parsIng);
      })
      .catch((response) => {
        console.log(response.message);
      });
  }


  console.log(Ingrredients);
  

  useEffect(() => {
    getMaelById();
  }, []);

  return (
    <>
      {Meal && (
        <div className="container p-4">
          <div className="flex gap-4 flex-col lg:flex-row ">
            <div className="lg:w-2/3 text-start">
              <h1 className="text-5xl font-semibold mb-4 md:mb-4 font-Pacifico">
                {Meal.strMeal}
              </h1>
              <div className="grid gap-4 items-stretch lg:grid-cols-2">
                <div>
                  <img
                    className="w-full rounded-2xl mb-8"
                    src={Meal.strMealThumb}
                    alt={Meal.strMeal}
                  />
                  <ul className="flex gap-4 justify-center">
                    <li className="bg-red-600  text-white py-2 px-4 rounded-lg ">
                      <Link
                        target="_blank"
                        to={Meal.strYoutube}
                        className="flex gap-2 justify-center items-center"
                      >
                        <FaYoutube />
                        youtube
                      </Link>
                    </li>
                    <li className="bg-green-500  text-white py-2 px-4 rounded-lg ">
                      <Link
                        target="_blank"
                        to={Meal.strSource}
                        className="flex gap-2 justify-center items-center"
                      >
                        <TbWorld />
                        source
                      </Link>
                    </li>
                  </ul>
                </div>
                <p className="font-Pacifico">{Meal.strInstructions}</p>
              </div>
            </div>
            <div className="lg:w-1/3 p-4">
              <div className="bg-[#F9FAFB] rounded-2xl p-4">
                <h3 className="text-2xl font-semibold mb-4 border-b-4 p-2">
                  Ingredients
                </h3>

                {Ingrredients?.map( (ing, indx) => <div key={indx} className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 ">
                  <span>{ing.ingrediant}:</span>
                  <span>{ing.masure}</span>
                </div> )  }



              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
