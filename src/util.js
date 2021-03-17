export function buildChartData(data = {}, selectedCountry = 'worldwide', casesType = 'cases') {
    let dataBuilt = [];
    let lastDataPoint;
    console.log(selectedCountry);
    if(selectedCountry === 'worldwide'){
        for (let date in data[casesType]) {
            if(lastDataPoint){
                dataBuilt.push({
                    x: date,
                    y: data[casesType][date]  - lastDataPoint < 0? 0 : data[casesType][date]  - lastDataPoint
                })
                
            }
            lastDataPoint = data[casesType][date] 
        }
    }else{
        for (let date in data.timeline[casesType]) {
            if(lastDataPoint){
                dataBuilt.push({
                    x: date,
                    y: data.timeline[casesType][date]  - lastDataPoint < 0? 0 : data.timeline[casesType][date]  - lastDataPoint
                })
                
            }
            lastDataPoint = data.timeline[casesType][date] 
        }
    }
    console.log("done")
    return dataBuilt;
}
export function buildMapData(allCountriesData, worldwideData, casesType = 'cases') {
    let mapData = [];
    console.log(allCountriesData);
    mapData = allCountriesData.map(country => {
        return {
            country: country.country,
            lat: country.countryInfo.lat,
            long: country.countryInfo.long,
            cases: country.cases,
            recovered: country.recovered,
            deaths: country.deaths,
            flag: country.countryInfo.flag,
            radius: ((country[casesType] * 100 ) / worldwideData[casesType]) * 5
        }
    })
    return mapData;
}