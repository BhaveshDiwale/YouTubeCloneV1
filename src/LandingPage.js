import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default function LandingPage() {
  const [query,setQuery]= useState(false);
  const [searched,setSearched] = useState('');

  const isQueried=(queryState,searchedFor)=>{
    if(queryState!==null)
    setQuery(queryState);
    setSearched(searchedFor);
  }
  return (
    <>
      <Navbar queryQues={isQueried}/>
      <Sidebar queryAns={query} searchedFor={searched}/>
    </>
  )
}
