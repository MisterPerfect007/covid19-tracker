import React from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import uniqid from 'uniqid';


function SelectCountry({ selectedCountry, allCountriesData, changeCountry }) {
    return (
        <div style={{background: '#fff'}}>
            <FormControl variant="outlined">
            <Select 
              value={selectedCountry}
              onChange={changeCountry}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {
                  allCountriesData.map(item => (
                      <MenuItem key={uniqid()} value={item.country}>{item.country}</MenuItem>
                  ))
              }
            </Select>
          </FormControl>
        </div>
    )
}

export default SelectCountry;
