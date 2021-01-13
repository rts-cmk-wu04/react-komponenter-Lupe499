import './App.css';
import React, { useEffect, useState } from "react";
import Surfing from './components/Surfing';

function App() {
  var [results, setResult] = useState([])

  useEffect(function() {
    fetch("./data.json")
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      setResult(data)
    })
  }, [])

	return (
    <div className="App">
        {results.map(function(result) {
					return <Surfing result={result.surfing}/>
				})}
    </div>
  )
}

export default App;
