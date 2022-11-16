import Hero from './Hero';
import { useParams } from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const MovieView = () =>{
    const {id} =useParams();

    const [movieDetails, setMovieDetails] = useState({});
    const [isLoading , setIsLoading] = useState({});

    useEffect(()=>{
        fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=ab166ff82684910ae3565621aea04d62&language=en-US`).then((response) => response.json())
        .then ((data) =>{
            setMovieDetails(data);
            setIsLoading(false);
        });
    }, [id]);

    function renderMovieDetails()  {
        if (isLoading){
            return (<Hero text="Loading..." />)
    }
    if (movieDetails)  {
        const PosterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
        const backdropUrl = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`
        return(
            <>
            <Hero text={movieDetails.original_title} backdrop ={backdropUrl}/> 
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <img src = {PosterPath} alt = "Image Poster" onError={(e) => {e.target.onError = null; e.target.src = "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg" ; e.target.alt = "Poster not availible";}} className='img-fluid shadow rounded'></img>
                     </div>
                    <div className='col-md-9'>
                        <h2>{movieDetails.original_title}</h2>
                        <p className='lead'>
                            {movieDetails.overview}
                        </p>
                        <h4>Release Date:</h4> {movieDetails.release_date}
                        <h4>Vote Average:</h4> {movieDetails.vote_average}
                        <h4>Vote Count: </h4> {movieDetails.vote_count}
                    </div>
                </div>
            </div>
           </>
         
        )
              
 
    }

};
return renderMovieDetails();
}

export default MovieView;
