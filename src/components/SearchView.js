import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";


const MovieCard = ({movie}) =>
{
    const PosterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    const detailURL = `/movie/${movie.id}`
 return (   <div className="col-lg-3 col-md-3 col-2">
             <div className="card">
              <img src={PosterUrl}  onError={(e) => {e.target.onError = null; e.target.src = "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg" ; e.target.alt = "Poster not availible";}} className="card-img-top" alt={movie.original_title}/>
              <div className ="card-body">
              <h5 className ="card-title">{movie.original_title}</h5>
              <Link to = {detailURL} className="btn btn-primary">Show details</Link>
              </div>
              </div>
            </div>
       )
}

const SearchView =({keyword,searchResults})=>{
    const title =  `You are searching for ${keyword}`;
     const resultHtml = searchResults && searchResults.map((obj , i) => {
      return <MovieCard movie={obj} key={i} />
 })    





    return(
        <div>
            <Hero text ={title} />
            {resultHtml &&
            <div className = "container">
                <div className="row">
                    {resultHtml}
                </div>
            </div>
            }
        </div>
    );
}
export default SearchView;