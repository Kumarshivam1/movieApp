import React, { useContext } from 'react'
import { AppContext } from './context'
import { useGlobalContext } from './context';
import  Search  from "./Search"
import MovieDetail from './MovieDetail';
const Home = () => {
  // const name = useContext(AppContext);

  return (
    <div>
      <Search/>
      <MovieDetail/>
    </div>
  )
}

export default Home