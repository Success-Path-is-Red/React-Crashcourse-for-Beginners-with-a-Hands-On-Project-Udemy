import React, {useEffect, useState} from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './body.css'
function Body(props) {
    const [items, setitem] = useState([])
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then(response => response.json())
            .then(data => [setitem(data.meals)])
    }, [])

    const itemslist = items.map(item => {
        return <div className="col-md-4">
            <p>{item.strMeal}</p>
            <figure>
                <img src={item.strMealThumb}/>
            </figure>
            <figcaption>
                {item.idMeal}
            </figcaption>
        </div>
    });

    return (
        <div>
            the number of items is {items.length}
            <div className="row">
                {itemslist}
            </div>
        </div>
    );
}

export default Body;