import React, {useState, useEffect} from "react";
import '../styles.css';
import MovieCard from "./MovieCard";

export default function MoviesGrid({movies, watchlist, toggleWatchlist}) {

    const [searchTerm, setSearchTerm] = useState("");
    const [genre, setGenre] = useState("All Genres");
    const [rating, setRating] = useState("All");


    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearchGenre = (event) => {
        setGenre(event.target.value);
    }

    const handleSearchRating = (event) => {
        setRating(event.target.value);
    }

    const getRatingValue = (rating) => {
        if (rating >= 7) {
            return 'Good';
        } else if (rating >= 4) {
            return 'Ok';
        } else {
            return 'Bad';
        }
    }

    const filteredMovies = movies.filter(movie => {
        const matchesSearchTerm = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGenre = genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase();
        const matchesRating = rating === "All" || getRatingValue(movie.rating) === rating;

        return matchesSearchTerm && matchesGenre && matchesRating;
    });
    return (
        <div>
            <input
            type={'text'}
            placeholder={'Search movies'}
            className={'search-input'}
            value={searchTerm}
            onChange={handleSearchChange}
            />

            <div className={'filter-bar'}>

                <div className={'filter-slot'}>
                    <label>Genre</label>
                    <select className={'filter-dropdown'} value={genre} onChange={handleSearchGenre}>
                        <option>All Genres</option>
                        <option>Action</option>
                        <option>Horror</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                    </select>
                </div>

                <div className={'filter-slot'}>
                    <label>Rating</label>
                    <select className={'filter-dropdown'} value={rating} onChange={handleSearchRating}>
                        <option>All</option>
                        <option>Good</option>
                        <option>Ok</option>
                        <option>Bad</option>
                    </select>
                </div>

            </div>

            <div className={'movies-grid'}>
                {
                    filteredMovies.map(movie => (
                        <MovieCard movie={movie}
                                   toggleWatchlist={toggleWatchlist}
                                   isWatchlisted={watchlist.includes(movie.id)}
                                   key={movie.id}
                        />
                    ))
                }
            </div>

        </div>

    )
}