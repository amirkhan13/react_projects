import { useEffect, useState } from "react";
import MovieContext from "./MovieContext";

const MovieContextProvider = ({children})=>{
    const[movies ,setMovies] = useState([]);
    const[loading ,setLoading] = useState(false)
    const[error , setError] = useState("")
    const[query , setQuery] = useState("Avengers")
    const[currentPage, setCurrentPage] = useState(1); 
    const[totalPages, setTotalPages] = useState(1)
    const[showMovieDetails , setShowMovieDetails] = useState(null);
    
    
    const API_KEY = import.meta.env.VITE_API_KEY
 

    const fetchMovies = async (searchTerm =query ,page = currentPage)=>{
        if(!searchTerm) return;
        setLoading(true);
        setError("")

        try {
            const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&page=${page}`) 
            const data = await res.json()   
           
            
           
            

            if(data.Response === "True"){
                setMovies(data.Search || [])
                const total =Math.ceil(data.totalResults/10);
                setTotalPages(total >10 ? 10 : total)
            }else{
                setMovies([]);
                setError(data.Error || "No movies Found")
            }
        } catch (err) {
            setError("Something went wrong")
        }
        finally{

            setLoading(false)
        }

        
    };

    useEffect(() => {
    fetchMovies(query , currentPage);
  }, [query ,currentPage]);


    const fetchMoviesDetails = async(id)=>{
        if(!id)return;
        setLoading(true)
        setError("")

        try {
            const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
            const data = await res.json()


            if(data.Response === "True"){
                setShowMovieDetails(data)
            }else{
                setShowMovieDetails({})
                setError(data.Error || "Unable to fetch the Details")
            }
            
        } catch (error) {
            setError("something went Wrong")
        }
        finally{
            setLoading(false)
        }
    }
    

    return(
        <MovieContext.Provider value={{movies ,loading ,error ,query ,setQuery,fetchMovies, currentPage,setCurrentPage,totalPages, fetchMoviesDetails ,setShowMovieDetails,showMovieDetails}} >
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider