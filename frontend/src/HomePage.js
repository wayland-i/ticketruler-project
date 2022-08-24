import React from "react";
import SearchBar from './SearchBar';
import ConcertContainer from './ConcertContainer';

function HomePage({shows}) {
    return (
        <div>
            <SearchBar />
            <ConcertContainer shows={shows} />
        </div>
    )
}

export default HomePage