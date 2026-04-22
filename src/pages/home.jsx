import MovieCard from "../components/MovieCard";
import { useState, useEffect } from 'react';
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async() => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                setError("Failed to Load Movies...");
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        //Guard Clauses
        if (!searchQuery.trim()) return;
        if (loading) return;

        setLoading(true);

        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } catch (err) {
            console.log(err);
            setError("Failed to search movies...");
        } finally {
            setLoading(false);
        }
    }

    return (
        
       <div className="home">
            <form className="search-form" onSubmit={handleSearch}>
                <input value={searchQuery} type="text" placeholder="Search for movie..." 
                className="search-input"
                onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type='submit' className='search-button'>Search</button>
            </form>
            { error && <div className="error-message">{error}</div>}
            { loading ? (
                <div className="loading">Loading...</div>
            ) :  (
            <div className="movies-grid">
                {movies.map((movie) => {
                    return <MovieCard movie={movie} key={movie.id} />;
                })}     
            </div>
            )      
            } 
       </div> 
    );    
}

export default Home;