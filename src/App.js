import { useState, useEffect } from "react";
import Grid from "./components/Grid/Grid";


function App() {

  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/data/data.json')
      .then((response) => response.json())
      .then((jsonData) => {
        // Set the data in state
        setData(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <div className="app bg-black min-h-screen text-white flex justify-center align-middle">
      <Grid data={data} />
    </div>
  );
}

export default App;
