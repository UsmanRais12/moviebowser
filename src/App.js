import Navbar from './components/navbar';
import Home from './components/home';
import React from 'react';
import SearchView from './components/SearchView'
import {useState,useEffect} from 'react';
import AboutView from './components/AboutView';
import MovieView from './components/MovieView';
import {Routes , Route, Link} from 'react-router-dom';
import Hero from './components/Hero';
import './App.css';
import NotFound from './components/Notfound';


function App() {
 const[searchResults,setSearchResults] = useState([]);
 const [searchText,setSearchText] = useState(' ');
 useEffect(()=>{
  if(searchText != null){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=a8230077034fbbc194fd467735c6c75d&language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then(Response => Response.json())
    .then(data =>{
      setSearchResults(data.results)
      if(data.total_results === 0){
        
      setSearchText('No result found') 
      }
      console.log([data])
    })
   }

  } ,[searchText])
 
  return (
    <div>
    <Navbar searchText={searchText} setSearchText={setSearchText}/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/about' element={<AboutView />} />
    <Route 
  path='/search' 
  element={
    <SearchView keyword={searchText} searchResults={searchResults} />
  } 
  
/>
   <Route path = '/movie/:id' element ={<MovieView/>} />
   <Route path='*' element ={<NotFound/>} />

    </Routes>
    </div>
  );
}

export default App;
 