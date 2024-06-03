import React, { useContext, useEffect, useState } from "react";
// useContext(warehouse)
// RouterProvider(delivery boy)
// consumer/(useContext())


const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const [isLoading,setIsLoading] = useState(true);
    const [movie,setMovie]= useState([]);
    const [searchQuery,setSearchQuery]=useState("titanic");
    const API_URL= `http://www.omdbapi.com/?apikey=5b65b284&s=${searchQuery}`;
    const getMovies = async(url)=>{
        const res  = await fetch(url);
        const data = await res.json();

        if(data.Response==="True")
        {
            setIsLoading(false);
            setMovie(data.Search);
            console.log(movie);
        }
    }
    useEffect(()=>{
        //debouncing
      let timer =  setTimeout(()=>{
            getMovies(API_URL);
        },1000);

        return ()=>(clearTimeout(timer))
       },[searchQuery]);

    return <AppContext.Provider value={
        {isLoading,movie,searchQuery,setSearchQuery}
    }>{children}</AppContext.Provider>

    };

//global custom hook
const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext};
