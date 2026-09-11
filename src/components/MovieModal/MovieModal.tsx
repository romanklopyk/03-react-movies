import css from './MovieModal.module.css';
import {createPortal} from 'react-dom';
import type {Movie} from "../../types/movie.ts";

interface MovieModalProps {
    movieDetail: Movie;
    setIsModalOpen: (isOpen: boolean) => void;
    setSelectedMovie: (movie: { id: null; movie: null }) => void;
}

function MovieModal({setIsModalOpen, movieDetail, setSelectedMovie}:MovieModalProps) {
    console.log('movie from modal',movieDetail);

    function handleCloseModal() {
        setIsModalOpen(false);
        setSelectedMovie({id: null, movie: null});
    }

    return createPortal(
        <div className={css.backdrop} role="dialog" aria-modal="true">
            <div className={css.modal}>
                <button onClick={handleCloseModal} className={css.closeButton} aria-label="Close modal">
                    &times;
                </button>
                <img
                    src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
                    alt={movieDetail.title}
                    className={css.image}
                />
                <div className={css.content}>
                    <h2>{movieDetail.title}</h2>
                    <p>{movieDetail.overview}</p>
                    <p>
                        <strong>Release Date:</strong> {movieDetail.release_date}
                    </p>
                    <p>
                        <strong>Rating:</strong> {movieDetail.vote_average}/10
                    </p>
                </div>
            </div>
        </div>,
        document.body
    )
}

export default MovieModal;