import { useState, useContext} from "react"
import { MovieContext } from "./MovieContext" //MovieContext is a context hook

const AddMovie = () => {
    
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [movies, setMovies] = useContext(MovieContext)
    //the setMovies function is connected to the MovieContext here and is therefore
    //able to access the three movies that are already in the MovieContext 
    //this is connected to the spread operator [...prevMovies] below

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const updateMovie = (prevMovies) => {
        return [...prevMovies, {name, price}]
    }

    const addMovie = e => {
        e.preventDefault()
        setMovies(updateMovie)
        // prevMovies => [...prevMovies, {name: name, price: price}])
        //...prevMovies is using a spread operator to include all the previous movies
        //and next {name: name, price: price} will add a new movie,
        
    }
    return (
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" name="price" value={price} onChange={updatePrice} />
            <button>Submit</button>
        </form>
    )
}

export default AddMovie; 






// import { useState, useContext } from "react"
// import { MovieContext } from "./MovieContext"

// const AddMovie = () => {{
//     const [name, setName] = useState("")
//     const [price, setPrice] = useState("")
//     const [movies, setMovies] = useContext(MovieContext)

//     const updateName = (e) => {
//         setName(e.target.value)
//     }

//     const updatePrice = (e) => {
//         setPrice(e.target.value)
//     }

//     const addMovie = (e) => {
//         e.preventDefault()
//         setMovies(prevMovies => [...prevMovies, {name: name, price: price}])
        
//     }

//     return (
        
//         <form onSubmit={addMovie}>
//             <input type="text" name="name" value={name} onChange={updateName}/>
//             <input type="text" name="price" value={price} onChange={updatePrice}/>
//             <button>Sub</button>
//         </form>
//     )
// }}

// export default AddMovie






// // import { useState, useContext } from "react"
// // import { MovieContext } from "./MovieContext"

// // const AddMovie = () => {
// //     const [name, setName] = useState("")
// //     const [price, setPrice] = useState("")






// //     const [movies, setMovies] = useContext(MovieContext)

// //     const updateName = (e) => {
// //         setName(e.target.value)
// //     }

// //     const updatePrice = (e) => {
// //         setPrice(e.target.value)
// //     }

// //     const addMovie = (e) => {
// //         e.preventDefault()
// //         setMovies(prevMovies => [...prevMovies, { name: name, price: price }])
// //     }

// //     return (
// //         <form onSubmit={addMovie}>
// //             <input type="text" name="name" value={name} onChange={updateName} />
// //             <input type="text" name="price" value={price} onChange={updatePrice} />
// //             <button>Submit</button>
// //         </form>
// //     )
// // }

// // export default AddMovie