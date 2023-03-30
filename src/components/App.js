import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  

  console.log('RERENDER')
  const [searchLetters, setSearch] = useState(null)

  function setTheSearch(search) {
    setSearch(search)
  }

  return (
    <div className="app">
      <Header handleChange = {setTheSearch}/>
      <ListingsContainer searchLetters = {searchLetters}/>
    </div>
  );
}

export default App;
