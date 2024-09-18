import React from "react";
import '../styles.css';
import MovieCard from "./MovieCard";

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
    const watchlistMovies = movies.filter(movie => watchlist.includes(movie.id));

    return (
        <div>
            <h1 className={'title'}>Watch List</h1>
            <div className={'movies-grid'}>
                {watchlistMovies.map(movie => (
                    <MovieCard
                        movie={movie}
                        toggleWatchlist={toggleWatchlist}
                        isWatchlisted={true}
                        key={movie.id}
                    />
                ))}
            </div>
        </div>
    );
}