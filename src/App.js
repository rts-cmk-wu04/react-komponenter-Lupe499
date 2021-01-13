import './App.css';
import React, { useEffect, useState } from "react";
import Delivery from './components/Delivery';

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
					return <Delivery result={result.deliveries[0]}/>
				})}
    </div>
  )
}

export default App;
