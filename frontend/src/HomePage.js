import React from "react";
import SearchBar from './SearchBar';
import ConcertContainer from './ConcertContainer';

function HomePage({shows, setSearchString, setCurrentShow, userId }) {
    return (
        <div>
            <br></br>
            <SearchBar setSearchString={setSearchString} />
            <ConcertContainer setCurrentShow={setCurrentShow} shows={shows} userId={userId}/>
        </div>
    )
}

export default HomePage