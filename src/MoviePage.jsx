import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MoviePage = () => {
  const {id} = useParams();
  const [isLoading,setIsLoading] = useState(true);
  const [movie,setMovie]= useState([]);
  
  const API_URL= `http://www.omdbapi.com/?apikey=5b65b284&i=${id}`;
  const getMovies = async(url)=>{
      const res  = await fetch(url);
      const data = await res.json();

      if(data.Response==="True")
      {
          setIsLoading(false);
          setMovie(data);
          console.log(movie);
      }
  }
  useEffect(()=>{
      //debouncing
    let timer =  setTimeout(()=>{
          getMovies(API_URL);
      },1000);
  
      return ()=>(clearTimeout(timer))
     
  },[])
  console.log(movie);
  // const {imdbID, Title,Poster}= movie;
  return (
    
      <section className='movie-section'>
        <div className='movie-card'>
          <figure>
          <img src={movie.Poster} alt='k'></img>
          </figure>
          <div className="card-content">
          <div className='title'>{movie.Title}</div>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating}</p>
          <p className="card-text">{movie.Country}</p>
          </div>
         
        </div>
          
         
      </section>
        
       
     
    
  
  )
}

export default MoviePage