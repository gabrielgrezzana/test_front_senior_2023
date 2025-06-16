import axios from "axios";

async function fetchMovies() {
    try{
        const response = await axios.get('https://the-one-api.dev/v2/movie', {
            headers: {
                'Authorization': `Bearer den2CO9YNZ0EtDaYyu5b`
            }
        })
        console.log('response.data -> ',response.data);
        return response.data.docs;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
}

export default fetchMovies;