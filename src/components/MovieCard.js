import React from "react";
import '../styles.css';

export default function MovieCard({movie}) {

    const handleError = (event) => {
        event.target.src = 'images/default.jpg';
    }

    const getRatingClass = (rating) => {
        if (rating >= 7) {
            return 'rating-good';
        } else if (rating >= 4) {
            return 'rating-ok';
        } else {
            return 'rating-bad';
        }
    }

    return (
        <div className={'movie-card'} key={movie.id}>

            <img src={`images/${movie.image}`} alt={movie.title} onError={handleError}/>
            <div className={'movie-card-info'}>
                <h3 className={'movie-card-title'}>{movie.title}</h3>
                <p className={'movie-card-genre'}>{movie.genre}</p>
                <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</p>
            </div>

        </div>
    )
}