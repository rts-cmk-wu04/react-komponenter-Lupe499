import { useEffect, useState } from 'react';
import './App.css';




function App() {
  var [results, setResult] = useState([]);

  useEffect(function() {
  
    fetch("./data.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setResult(data);  
      console.log(data);         
    })
  }, []);
  



  return (
    
    <h1>hej</h1>
  );
}
  export default App;
