import React, { useState, useEffect } from 'react';
import '../css/SearchPage.css';
import { buttons } from "./data";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import { gethotels, filterhotels } from "../services/services";

function SearchPage() {
    const [filtredhotels, setFiltredhotels] = useState(null);
    useEffect(() => {
      setFiltredhotels(gethotels());
    }, []);
  
    function handlehotels(e) {
      let typehotels = e.target.value;
      typehotels !== "all"
        ? setFiltredhotels(filterhotels(typehotels))
        : setFiltredhotels(gethotels());
    }
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>4 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
        <>
          {buttons &&
            buttons.map((filter, index) => (
              <>
                <Button variant="outlined" key={index} value={filter.value} onClick={handlehotels}>
                  {filter.name}
                </Button>
              </>
            ))}
        </>
            </div>
    <>
      {filtredhotels &&
        filtredhotels.map((hotel, index) => (
          <SearchResult key={index} {...hotel} />
        ))}
    </>
        </div>
    )
}

export default SearchPage
