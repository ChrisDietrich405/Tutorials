import "./App.css"
import MovieList from "./MovieList"
import Nav from "./Nav"
//when I use export default like for example with the Nav I now can't export anything else
//from this component
import {MovieProvider} from "./MovieContext"
//MovieProvider is in curly brackets because it's not being exported as default 
//the name can't be changed
import AddMovie from "./AddMovie"
function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav/> 
        <MovieList/> 
      </div>
      <AddMovie/>
    </MovieProvider>
    
  )
}

export default App;



// import "./App.css"
// import MovieList from "./MovieList"
// import Nav from "./Nav"
// import { MovieProvider } from "./MovieContext"
// import AddMovie from "./AddMovie"

// function App() {
//   return (
//     <div className="App">
//       <MovieProvider>
//         <Nav/>
//         <AddMovie />
//         <MovieList />
//       </MovieProvider>
//     </div>
//   )
// }

// export default App










// import MovieList from "./MovieList"
// import Nav from "./Nav"
// import './App.css';
// import MovieProvider from "./MovieContext"
// import AddMovie from "./AddMovie"

// function App() {
//   return (
//     <MovieProvider>
//       <div className="App">
//         <Nav/>
//         <AddMovie/>
//         <MovieList/>
//       </div>
//     </MovieProvider>
//   );
// }

// export default App;
