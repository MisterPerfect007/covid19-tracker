import React from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import uniqid from 'uniqid';


function SelectCountry({ selectedCountry, allCountryData, changeCountry }) {
    return (
        <div style={{background: '#fff'}}>
            <FormControl variant="outlined">
            <Select 
              value={selectedCountry}
              onChange={changeCountry}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {
                  allCountryData.map(item => (
                      <MenuItem key={uniqid()} value={item.countryInfo.iso3}>{item.country}</MenuItem>
                  ))
              }
            </Select>
          </FormControl>
        </div>
    )
}

export default SelectCountry;
