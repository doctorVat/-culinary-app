import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) =>{
    return (
            <div className={style.recipe}>
                <h1 className={style.title}>{title}</h1>
                <ul className={style.ul}>
                    {ingredients.map ((ingredient, index) => (
                    <li className={style.li}
                    key={index}>
                        {ingredient.text}
                    </li>
                    ))}
                </ul>
                <p>Calories: {Math.floor(calories)}</p>
                <img 
                className={style.image}
                src={image} alt=""/>
            </div>



    )
}
export default Recipe