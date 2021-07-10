import { useState, createContext } from "react"

export const MovieContext = createContext()
//this MovieContext is being used in the AddMovie component and the Add movie component
//is not directly wrapped by the MovieProvider 

export const MovieProvider = props => {  //MovieProvider is a component 

    const [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            price: "$10",
            id: 33333
        },
        {
            name: "Game of Thrones",
            price: "$10",
            id: 3322
        },
        {
            name: "Inception",
            price: "$10",
            id: 3222
        }
    ]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}



// import { useState, createContext } from "react"

// export const MovieContext = createContext()

// export const MovieProvider = ({children}) => {
//     const [movies, setMovies] = useState([
//         {
//             name: "Harry",
//             price: "10",
//             id: 1      
//         },
//         {
//             name: "Poter",
//             price: "10",
//             id: 2     
//         },
//         {
//             name: "Game",
//             price: "10",
//             id: 3      
//         }
//     ])
//     return (
//         <MovieContext.Provider value={[movies, setMovies]}>
//             {children}
//         </MovieContext.Provider>
//     )

// }





















// // import { useState, createContext } from "react"

// // export const MovieContext = createContext()

// // const MovieProvider = ({ children }) => {  // example of named export  and we need to use curly brackets in App.js
// //     const [movies, setMovies] = useState([
// //         {
// //             name: "Harry",
// //             price: "10",
// //             id: 1      
// //         },
// //         {
// //             name: "Poter",
// //             price: "10",
// //             id: 2     
// //         },
// //         {
// //             name: "Game",
// //             price: "10",
// //             id: 3      
// //         }
// //     ])
// //     return (
// //            <MovieContext.Provider value={[movies, setMovies]}>
// //                { children }
// //            </MovieContext.Provider> 

// //     )
// // }

// // export default MovieProvider

