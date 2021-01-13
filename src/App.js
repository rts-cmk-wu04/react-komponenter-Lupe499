  
import './App.css';
import React, { useEffect, useState } from "react";
import Collections from './components/Collections';

function App() {
  var [results, setResult] = useState([])

  useEffect(function() {
    fetch("./data.json")
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      setResult(data)
      console.log(data);
    })
  }, [])

	return (
    <div className="App">
        {results.map(function(result) {
					return <Collections result={result.collections[0]}/>
				})}
    </div>
  )
}

export default App;
