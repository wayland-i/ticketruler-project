import React from "react";
import SearchBar from './SearchBar';
import ConcertContainer from './ConcertContainer';

function HomePage({shows, setSearchString}) {
    return (
        <div>
            <SearchBar setSearchString={setSearchString} />
            <ConcertContainer shows={shows} />
        </div>
    )
}

export default HomePage