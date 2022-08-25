import React from "react";
import SearchBar from './SearchBar';
import ConcertContainer from './ConcertContainer';

function HomePage({shows, setSearchString, setCurrentShow }) {
    return (
        <div>
            <SearchBar setSearchString={setSearchString} />
            <ConcertContainer setCurrentShow={setCurrentShow} shows={shows} />
        </div>
    )
}

export default HomePage