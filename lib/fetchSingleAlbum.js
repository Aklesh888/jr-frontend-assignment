import axios from 'axios';

const fetchAlbum = async (albumId) => {

    const options = {
        method: 'GET',
        url: 'https://genius-song-lyrics1.p.rapidapi.com/album/details/',
        params: {id: albumId},
        headers: {
            'X-RapidAPI-Key': 'de6f60d3f7mshea1e8733e9d416dp1643a9jsn3a93b5295821',
            'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
    };
    
    try {
        const response = await axios.request(options);
        return(response.data);
    } catch (error) {
        console.error(error);
    }
}

export default fetchAlbum