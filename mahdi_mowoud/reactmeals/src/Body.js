import React, {useEffect, useState} from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Body(props) {
    const[items, setItem] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
            .then(response => response.json())
            .then(data => [setItem(data.meals)])
    },[])
    const itemlist = items.map(item => {
        return<div className="col-md-4">
            <p>{item.strMeal}</p>
            <img src={item.strMealThumb}/>
            <p>{item.idMeal}</p>
        </div>
    });
    return (
        <div>
            <div className="row">
            {itemlist}
            </div>
        </div>
    );
}

export default Body;