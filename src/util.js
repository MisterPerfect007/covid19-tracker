export function buildChartData(data, selectedCountry = 'worldwide', casesType = 'cases') {
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