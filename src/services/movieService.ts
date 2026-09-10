import axios from 'axios';

const TOKEN = import.meta.env.VITE_API_KEY;

const headers = {
    Authorization: `Bearer ${TOKEN}`
}

async function getMovies(query: string) {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}`, {headers});
    // console.log(response.data);
    return response;
}

export default getMovies;