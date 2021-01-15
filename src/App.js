  
import './App.css';
import React, { useEffect, useState } from "react";
import Collections from './components/Collections';
import Delivery from './components/Delivery';
import Outdoor from './components/Outdoor';
import Surfing from './components/Surfing';
import Summer from './components/Summer';
import News from './components/News';

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
					return (
            <>
              <Collections result={result.collections[0]}/>
              <Delivery result={result.deliveries[0]}/>
              <Outdoor result={result.outdoor}/>
              <Surfing result={result.surfing}/>
              <Summer result={result.must_see_places}/>
              <News result={result.latest_news[0]}/>
          </>
          )
				})}
    </div>
  )
}

export default App;
