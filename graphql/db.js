
import fetch from "node-fetch";

const API_URL = "https://yts.am/api/v2/list_movies.json?"

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    if(limit > 0){
        REQUEST_URL += `limit=${limit}`;
    }
    if(rating > 0){
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
};

// export const getMovies = (limit, rating) => {
//     return fetch(`${API_URL}`)
//     .then(res => res.json())
//     .then(json => json.data.movies)};


// export let movies = [
//     {
//         id: 0,
//         name: "jhcho",
//         score: 30
//     },
//     {
//         id: 1,
//         name: "nicholas",
//         score: 28
//     },
//     {
//         id: 2,
//         name: "jisu",
//         score: 20
//     }
// ];

// export const getMovies = () => movies;

// export const getById = id => {
//     const filteredMovies = movies.filter(movie => movie.id === id);
//     return filteredMovies[0];
// }

// export const deleteMovie = id => {
//     const cleanMovies = movies.filter(movie => movie.id !== id);
//     /* cleanMovies의 길이는 한개를 지울경우 2가됨. Movie 배열의 길이는 3임 */
//     if(movies.length > cleanMovies.length){
//         movies = cleanMovies;
//         return true;
//     }else {
//         return false;
//     }
// };


// export const addMovie = (name, score) => {
//     const newMovie = {
//         id: `${movies.length + 1}`,
//         name,
//         score
//     };
//     movies.push(newMovie);
//     return newMovie;
// }

