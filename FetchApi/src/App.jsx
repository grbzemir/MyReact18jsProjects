import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [countries, setCountries] = useState([])

  // useEffect(() => {

  //   fetch('https://restcountries.com/v3.1/all')
  //     .then(response => response.json())
  //     .then(response => setCountries(response));

  // }, []);

  useEffect(() => {

    axios.get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
      .catch(error => console.log({ error }));
    // .then(response => console.log(response.data));

  }, []);

  console.log(countries);

  return (
    <div className="App">
      <h1>Ülkeler</h1>
      <h3>fetch() / axios ile API&apos;dan veri almak</h3>
      {countries.map(country => (
        <div key={country.name.common}>
          <h2>{country.name.common}</h2>
          <h4>{country.capital}</h4>
          <p>
            <img
              src={country.flags.png}
              alt={country.name.common}
              style={{ width: '100px' }}
            /></p>

        </div>
      ))}
    </div>
  );

}

export default App;
