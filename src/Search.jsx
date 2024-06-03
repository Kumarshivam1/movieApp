import React, { useState } from 'react'
import { useGlobalContext } from './context';

const Search = () => {
    const {searchQuery,setSearchQuery} = useGlobalContext();
    const [inputText,setInputText]= useState("");
  
  return (
    <div>
        <form action="#" onSubmit={(e)=>e.preventDefault}>
        <input type='text'  placeholder="search here" onChange={(e)=>setSearchQuery(e.target.value)} name='name'></input>
  
        </form>

        </div>
  )
}

export default Search