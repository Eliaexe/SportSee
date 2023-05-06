import React from 'react';
import './../../styles/Nutrition.css';

/*
* Render the elements for nutrition information
* @param {Object} the data to display
* @retuns {JSX.Element}
*
*/

export default function Nutrition(props) {
    return(
        <div className='nutrition'>
            {Object.entries(props).map(([key, value]) => (
                <div key={key} className="nutrient-container">
                    <img src={`/img/${key}-icon.png`} alt={`${key}-icon`} />
                    <div className="nutrient-data">
                        <p className='big-bold'>{value}Kcal</p>
                        <p className='gray'>{key}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
