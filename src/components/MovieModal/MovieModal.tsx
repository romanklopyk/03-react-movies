import css from './MovieModal.module.css';
import {createPortal} from 'react-dom';

function MovieModal({setIsModalOpen, movie}) {
    console.log('movie',movie);
    return createPortal(
        <div className={css.backdrop} role="dialog" aria-modal="true">
            <div className={css.modal}>
                <button onClick={() => setIsModalOpen(false)} className={css.closeButton} aria-label="Close modal">
                    &times;
                </button>
                <img
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt="movie_title"
                    className={css.image}
                />
                <div className={css.content}>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <p>
                        <strong>Release Date:</strong> movie_release_date
                    </p>
                    <p>
                        <strong>Rating:</strong> movie_vote_average/10
                    </p>
                </div>
            </div>
        </div>,
        document.body
    )
}

export default MovieModal;