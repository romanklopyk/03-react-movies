// import css from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import React from "react";
import fetchMovies, {fetchMovieDetail} from '../../services/movieService';
import MovieGrid from "../MovieGrid/MovieGrid.tsx";
import MovieModal from "../MovieModal/MovieModal.tsx";
import type {Movie} from '../../types/movie';
import toast, {Toaster} from 'react-hot-toast';
import type {SelectedMovie} from '../../types/movie';
import Loader from "../Loader/Loader.tsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";

type Input = string;

function App() {
    const [selectedMovie, setSelectedMovie] = React.useState<SelectedMovie>({id: null, movie: null});
    const [query, setQuery] = React.useState('');
    const [movies, setMovies] = React.useState<Movie[]>([]);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);


    React.useEffect(() => {
        if (!query.trim())
            return;

        async function handleForm(query: string) {
            try {
                setIsLoading(true);
                setIsError(false);
                const response = await fetchMovies(query);
                setMovies(response.data.results);
                if (!response.data.results.length)
                    toast("No movies found for your request.");
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }

        }

        handleForm(query);

    }, [query]);

    React.useEffect(() => {
        if (selectedMovie.id === null)
            return;

        const movieId = selectedMovie.id;

        async function handleMovieDetail() {
            const response = await fetchMovieDetail(movieId);
            setSelectedMovie(prevState => ({...prevState, movie: response}));
        }

        handleMovieDetail();

    }, [selectedMovie.id]);


    function onSubmit(input: Input) {
        setQuery(input);
    }

    return (
        <>
            <Toaster/>
            <SearchBar onSubmit={onSubmit}/>
            {isLoading && <Loader/>}
            {!isLoading && isError && <ErrorMessage/>}
                <MovieGrid
                movies={movies}
                setIsModalOpen={setIsModalOpen}
                setSelectedMovieId={setSelectedMovie}
            />
            {isModalOpen && selectedMovie.movie &&
                <MovieModal movieDetail={selectedMovie.movie} setSelectedMovie={setSelectedMovie}
                            setIsModalOpen={setIsModalOpen}/>}
        </>
    )
}

export default App
