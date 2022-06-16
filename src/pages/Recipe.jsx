import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from '../api';
import Loader from '../components/Loader';

export default function Recipe() {
    const [recipe, setRecipe] = useState([]);
    const {id} = useParams();

    useEffect(()=> {
        getMealById(id).then(data => setRecipe(data.meals[0]))
    }, [])

  return (
    <>
        <button className="btn">Go Back</button>
        {!recipe.idMeal ? <Loader /> : (
            <div className="recipe">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <h1>{recipe.strMeal}</h1>
                <h6>Category: {recipe.strCategory}</h6>
                {/* {recipe.strArea ? <h6>{recipe.str.Area}</h6> : null}
                <p>{recipe.strInstructions}</p> */}
                <table className="centered">
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(recipe).map(key => {
                            if (key.includes('Ingredient') && recipe[key]) {
                                return(
                                    <tr>
                                        <td>{recipe[key]}</td>
                                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                        <td></td>
                                    </tr>
                                )
                            }
                        })}
                    </tbody>
                </table>
                {recipe.strYoutube ? (
                    <div className="row">
                        <h5>Video recpie</h5>    
                        <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen title={id} frameborder="0" /> 
                    </div>
                
                 ) : null}
            </div>
        )}
    </>
  )
}
