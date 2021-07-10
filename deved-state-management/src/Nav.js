import { useContext } from "react"
import { MovieContext } from "./MovieContext"


const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)

    return(
        <div>
            <h3>Dev Ed</h3>
            <p>List of Movies: {movies.length}</p>
        </div>

    );
}

export default Nav;











// import { useState, useContext } from "react"
// import Movie from "./Movie"
// import { MovieContext } from "./MovieContext"

// const Nav = () => {
//     const [movies, setMovies] = useContext(MovieContext)
//     return (
//         <div>
//             <h3>Dev Ed</h3>
//             <p>List of Movies {movies.length}</p>
//         </div>
//     )
// }

// export default Nav




// import { useContext } from "react"
// import { MovieContext } from "./MovieContext"



// const Nav = () => {
//    const [movies, setMovies] = useContext(MovieContext)

//     return (
//         <div>
//             <h3>hi</h3>
//             <p>List of Movies: {movies.length}</p>
//         </div>
//     )
// }

// export default Nav