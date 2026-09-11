import css from './MovieGrid.module.css';
import React from "react";
import type {Movie} from "../../types/movie.ts";
import type {SelectedMovie} from "../../types/movie.ts";

interface MovieGridProps {
    movies: Movie[];
    setIsModalOpen: (isOpen: boolean) => void;
    setSelectedMovieId: React.Dispatch<React.SetStateAction<SelectedMovie>>;
}


function MovieGrid({movies, setIsModalOpen, setSelectedMovieId}:MovieGridProps) {

    function handleMovieClick(id: number) {
        setSelectedMovieId(prevState => ({...prevState, id: id}));
        setIsModalOpen(true);
    }

    return (
        <>
            <ul className={css.grid}>
                {movies.map(movie => <li key={movie.id} onClick={() => handleMovieClick(movie.id)} >
                    <div  className={css.card}>
                        <img
                            className={css.image}
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            loading="lazy"
                        />
                        <h2 className={css.title}>Movie title: {movie.title} </h2>
                    </div>
                </li>)}
            </ul>
        </>
    );
}

export default MovieGrid;