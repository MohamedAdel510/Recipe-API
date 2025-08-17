import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

export default function Category() {
  const [AllMeals, setAllMeals] = useState(null);

  const {name} = useParams();

  function getAllMeals() {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
      .then((response) => {
        // console.log(response.data.meals);
        setAllMeals(response.data.meals);
      })
      .catch((response) => {
        console.log("Error Message: ", response.message);
      });
  }

  useEffect(() => {
    getAllMeals();
  }, [name]);

  return (
    <div className="meals mt-24 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-20">
      {AllMeals?.map((meal) => (
        <Recipe key={meal.idMeal} props={meal} />
      ))}
    </div>
  );
}
