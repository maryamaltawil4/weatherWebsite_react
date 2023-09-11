import { useState } from 'react'
import './App.css'
import Search from './components/Search/Search'

function App() {
  
  // eslint-disable-next-line no-unused-vars
  const [searchData, setSearchData] = useState(""); 

  const handleOnSearchChange = (searchData) => {
    setSearchData(searchData);
  }

  return (
    <>
      <Search onSearchChange={handleOnSearchChange} /> 
    </>
  )
}

export default App
