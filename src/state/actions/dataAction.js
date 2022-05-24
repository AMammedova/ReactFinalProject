import axios from "axios"
import {SEARCH_MOVIE} from "../action-types"

// export const searchMovies=(movies)=>{
//     return {
//         type: "SEARCH_MOVIE",
//         payload: {
//           movies: movies,
//         },
//       };
// }
// export const fetchMovies=(name)=>{
//     return function (dispatch) {
//         const api = "1cf8eb23";
//         fetch(`http://www.omdbapi.com/?s=${name}&apikey=${api}`)
//           .then((res) => res.json())
//           .then((data) => {
//             dispatch(searchMoveis(data.Search));
//           });
//       }; 
// }
export const  searchMovies=(name)=>{
    return async (dispatch)=>{
        try{
            
            const api = "1cf8eb23";
            let movies= await axios.get(`http://www.omdbapi.com/?s=${name}&apikey=${api}`) 
            console.log(movies.data.Search)
                         dispatch({
                             type:SEARCH_MOVIE,
                             payload:movies.data.Search
                         });
                       
                   
        } catch(error){
            console.log(error)
        }
        }
    }
