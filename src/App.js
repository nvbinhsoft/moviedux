import './App.css';
import './styles.css'
import Header from './components/Header';
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import Watchlist from "./components/Watchlist";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {useEffect, useState} from "react";

function App() {

    const [movies, setMovies] = useState([])
    const [watchlist, setWatchlist] = useState([])

    useEffect(() => {
        fetch("movies.json")
            .then(response => response.json())
            .then(data => setMovies(data))
    }, [])

    const toggleWatchlist = (movieId) => {
        setWatchlist( (previous) => {
            if (previous.includes(movieId)) {
                return previous.filter(id => id !== movieId)
            } else {
                return [...previous, movieId]
            }
        })
    }

    return (
    <div className="App">

        <div className={'container'}>
            <Header></Header>

            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/watchlist">Watch List</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<MoviesGrid movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist}/>} />
                    <Route path="/watchlist" element={<Watchlist movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />} />
                </Routes>
            </Router>

        </div>

        <Footer></Footer>
    </div>
  );
}

export default App;
