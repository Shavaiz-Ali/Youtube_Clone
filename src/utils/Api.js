import axios from "axios"


const BASE_URL = "https://youtube138.p.rapidapi.com"
// Fetching api from rapid api 
const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com',
    params: {
        // q: "cricket",
        hl: 'en',
        gl: 'US'
    },
    headers: {
        // getting api key from .env file form our root folder
        'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY, 
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};
// creating function to create the url based on the what user searches 
export const fetchDataFromApi = async (url) => {
    // destructuring the axios.get method which creates a url based on what user searches and stored it in our data object and return it  
    const { data } = await axios.get(`${BASE_URL}/${url}`, options); 
    return data;
}