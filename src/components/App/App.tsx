// import css from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import React from "react";
import getMovies from '../../services/movieService';
import MovieGrid from "../MovieGrid/MovieGrid.tsx";
import MovieModal from "../MovieModal/MovieModal.tsx";



function App() {
    const [selectedMovie, setSelectedMovie] = React.useState({});
    const [movie, setMovie] = React.useState('');
    const [movies, setMovies] = React.useState([]);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    async function handleForm(query:string){
        setMovie(query);
        const response = await getMovies(movie);
        // console.log(response.data.results);
        setMovies(response.data.results);
        // console.log(data);
    }

    return (
        <>
            <SearchBar handleForm={handleForm}/>
            <MovieGrid
                movies={movies}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                selectedMovie={selectedMovie}
                setSelectedMovie={setSelectedMovie}
            />
            {isModalOpen && <MovieModal setIsModalOpen={setIsModalOpen}/>}
        </>
    )
}

export default App
