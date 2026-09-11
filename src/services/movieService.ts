import axios, {type AxiosResponse} from 'axios';
import type {Movie} from '../types/movie';

interface ResponseData {
    results: Movie[];
}

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const config =
    {
        baseURL: 'https://api.themoviedb.org/3',
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        }
    }


async function fetchMovies(query: string): Promise<AxiosResponse<ResponseData>> {
    try {
        const response = await axios.get('/search/movie', {
                ...config,
                params: {
                    query
                }
            }
        );
        console.log('response', response);
        return response;
    } catch
        (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
}

async function fetchMovieDetail(id: number):Promise<Movie> {
    try
    {
        const response = await axios.get<Movie>(`/movie/${id}`, config)
        console.log('response detail', response.data);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching movie detail:', error);
        throw error;
    }
}


export {fetchMovies as default, fetchMovieDetail};