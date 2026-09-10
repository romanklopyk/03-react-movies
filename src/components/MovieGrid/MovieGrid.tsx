import css from './MovieGrid.module.css';

function MovieGrid({movies, isModalOpen, setIsModalOpen, selectedMovie, setSelectedMovie}) {

    function handleMovieClick(movie) {
        setSelectedMovie(movie);
        setIsModalOpen(true);
    }

    return (
        <>
            <ul className={css.grid}>
                {movies.map(movie => <li key={movie.id} onClick={() => handleMovieClick(movie)} >
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