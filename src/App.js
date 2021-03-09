import React, { useEffect, useState } from 'react';
import './App.css';
import AppLeft from './AppLeft';
import InfoBox from './InfoBox';
import SelectCountry from './SelectCountry';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('worldwide');
  const [allCountryData, setAllCountryData] = useState([]);
  useEffect(() => {
    async function fetchAllCountryData() {
      await fetch('https://disease.sh/v3/covid-19/countries')
      .then(response => response.json())
      .then(data => setAllCountryData(data))
    }
    fetchAllCountryData()
  }, [])
  const changeCountry = (e) => {
    setSelectedCountry(e.target.value);
  }
  return (
    <div className="app">
      <div className="app__right">
        <header className="app__header">
          <h1>Covid-19 tracker</h1>
          <SelectCountry 
            selectedCountry={selectedCountry} 
            allCountryData={allCountryData}
            changeCountry={changeCountry}
          />
          
        </header>
        <div className="app__infoBoxes">
          <InfoBox title="Cases"/>
          <InfoBox title="Recovered"/>
          <InfoBox title="Deaths"/>
        </div>
      </div>
      <div className="app__left">
        <AppLeft allCountryData={allCountryData} />
      </div>
    </div>
  );
}

export default App;
