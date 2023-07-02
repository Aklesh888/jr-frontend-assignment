import axios from "axios";

 const fetchSearchResults = async (query) => {
    const options = {
        method: 'GET',
        url: 'https://genius-song-lyrics1.p.rapidapi.com/search/',
        params: {
          q: query,
          per_page: '10',
          page: '1'
        },
        headers: {
          'X-RapidAPI-Key': 'de6f60d3f7mshea1e8733e9d416dp1643a9jsn3a93b5295821',
          'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          return response.data.hits
      } catch (error) {
          console.error(error);
      }
};

export default fetchSearchResults;