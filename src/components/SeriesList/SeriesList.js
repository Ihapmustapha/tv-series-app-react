import React from 'react';
import { Link } from 'react-router-dom'; 
import './SeriesList.css'; 

const SeriesListItem = ({series}) => {
    let seriesId = series.show.id; 
    return (
        <li>
            <Link to={'/series/' + seriesId }>
                {series.show.name}
            </Link>
        </li> 
    );
}

const SeriesList = (props) => {
    return (
        <div>
            <ul className="series-list">
                {props.list.map(series => (
                    <SeriesListItem series = {series} key={series.show.id}/> 
                ))}
            </ul> 
        </div>
    );
}


export default SeriesList; 