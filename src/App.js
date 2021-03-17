import React, { useEffect, useState } from 'react';
import './App.css';
import AppLeft from './AppLeft';
import InfoBox from './InfoBox';
import SelectCountry from './SelectCountry';
import 'fontsource-roboto';
import LeafletMap from './LeafletMap';
import '../node_modules/leaflet/dist/leaflet.css';

function App() {
  const [worldwideData, setWorldwideData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('worldwide');
  const [allCountriesData, setAllCountriesData] = useState([]);
  const [selectedCountryData, setSelectedCountryData] = useState({});
  const [casesType, setCasesType] = useState('cases');
  const [mapCenter, setMapCenter] = useState([20.731457, -37.577247]);
  const [zoom, setZoom] = useState(3);
  
  useEffect(() => {
    async function fetchAllCountriesData() {
      await fetch('https://disease.sh/v3/covid-19/countries')
      .then(response => response.json())
      .then(data => setAllCountriesData(data))
    }
    fetchAllCountriesData()
  }, [])
  useEffect(() => {
    async function fetchSelectedCountryData() {
      selectedCountry === 'worldwide'? await fetch('https://disease.sh/v3/covid-19/all')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSelectedCountryData(data)
        setWorldwideData(data)
        })
          : 
      await fetch(`https://disease.sh/v3/covid-19/countries/${selectedCountry}?strict=true`)
      .then(response => response.json())
      .then(data => {
        setSelectedCountryData(data)
        if(selectedCountry !== 'worldwide') {
          console.log([data.countryInfo.lat, data.countryInfo.long]);
          setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
          setZoom(4);
        }
      }
      )
      // .then(data => console.log(data))
      
    }
    fetchSelectedCountryData()

    //To focus on the selected country
  }, [selectedCountry])
  const changeCountry = (e) => {
    setSelectedCountry(e.target.value);
  } 
  return (
    <div className="app">
      <div className="app__right">
        <header className="app__header">
          <h1>COVID-19 tracker</h1>
          <SelectCountry 
            selectedCountry={selectedCountry} 
            allCountriesData={allCountriesData}
            changeCountry={changeCountry}
          />
          
        </header>
        <div className="app__infoBoxes">
          <InfoBox 
            title="Cases" 
            total={selectedCountryData.cases}
            todayTotal={selectedCountryData.todayCases}
            setCasesType={() => setCasesType('cases')}
            casesType={casesType}
          />
          <InfoBox 
            title="Recovered"
            total={selectedCountryData.recovered}
            todayTotal={selectedCountryData.todayRecovered}
            setCasesType={() => setCasesType('recovered')}
            casesType={casesType}
          />
          <InfoBox 
            title="Deaths"
            total={selectedCountryData.deaths}
            todayTotal={selectedCountryData.todayDeaths}
            setCasesType={() => setCasesType('deaths')}
            casesType={casesType}
          />
        </div>
        {/* The map */}
        <LeafletMap 
          zoom={zoom}
          mapCenter={mapCenter} 
          casesType={casesType} 
          allCountriesData={allCountriesData}
          worldwideData={worldwideData}
        />
      </div>
      <div className="app__left">
        <AppLeft 
          allCountriesData={allCountriesData} 
          selectedCountry={selectedCountry}
          casesType={casesType}
        />
      </div>
    </div>
  );
}

export default App;
