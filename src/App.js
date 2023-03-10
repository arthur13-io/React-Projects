import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
//307c46

const App = () =>{
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('')
    // const movie1 =
    //     {
    //         "Title": "The Life of David Gale",
    //         "Year": "2003",
    //         "imdbID": "tt0289992",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMTAxMzU0NTgxNzZeQTJeQWpwZ15BbWU2MDQzNDkxNw@@._V1_SX300.jpg"
    //       }
    const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=307c46';
    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovie('David');
    }, [])

    return(
           <div className="app">
            <h1>MoviePark</h1>
            <div className="search">
                <input type="text" placeholder="Search movie..."  value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                <img src={SearchIcon} alt="search" onClick={()=>{searchMovie(search)}} />
            </div>
            {
                movies.length > 0 
                ?
                (
                    <div className="container">
                        {
                        movies.map((movie)=>
                        <MovieCard movies={movie}/>)
                        }
                    </div>
                ):
                (
                    <div className="empty">
                        <h1>No movie found</h1>
                    </div>
                )
            }

            </div>
    );
}
export default App