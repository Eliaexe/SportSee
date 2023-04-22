import React from 'react';
import '../styles/Nutrition.css';

export default function Nutrition(props) {
    return(
        <div className='nutrition'>
            {Object.entries(props).map(([key, value]) => (
                <div key={key} className="nutrient-container">
                    <img src={`/img/${key}-icon.png`} alt="" srcset="" />
                    <div className="nutrient-data">
                        <p className='bigBold'>{value}Kcal</p> {/* Utilizzo del valore associato alla chiave corrente */}
                        <p className='gray'>{key}</p> {/* Utilizzo della chiave corrente come etichetta */}
                    </div>
                </div>
            ))}
        </div>
    )
}
