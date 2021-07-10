import { useContext } from "react"
import Movie from "./Movie"
import {MovieContext} from "./MovieContext"

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext) // MovieContext is basically createContext()
    //and allows me to get access to the values 
    //MovieContext is an argument for the useContext function
    //MovieContext above is added in order for us to have access to the three movies from 
    //the MovieContext file 

    return(
        <div>
            {movies.map(movie => (
                <li><Movie name={movie.name} price={movie.price} key={movie.id}/></li>
            ))}
        </div>

    );
}

export default MovieList;

// import { useState, useContext } from "react"
// import Movie from "./Movie"
// import { MovieContext } from "./MovieContext"

// const MovieList = () => {
//     const [movies, setMovies] = useContext(MovieContext)
    
//     return (
//         <div>
//             {movies.map(movie => (
//                 <Movie name={movie.name} price={movie.price} key={movie.id}/>
//                 // <li> name={movie.name} price={movie.price} key={movie.id}</li>
//             ))}
//         </div>
//     )
// }

// export default MovieList


















// import { useState, useContext } from "react"
// import Movie from "./Movie"
// import { MovieContext } from "./MovieContext"

// const MovieList = () => {
//     const [movies, setMovies] = useContext(MovieContext)
    
//     return (
//        <div>  
//            {movies.map(movie => (
//                <Movie name={movie.name} price={movie.price} key={movie.id} />
//            ))}
//        </div>
//     )
// }

// export default MovieList