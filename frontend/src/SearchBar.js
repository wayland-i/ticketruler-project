import React from "react";

// const[filter, setFilter] = useState("")

function SearchBar( { setSearchString } ) {


    return (
        <div className="SearchBar">
            <input onChange={(e) => setSearchString(e.target.value)} placeholder="Search for a show!" />
        </div>
    )
}

export default SearchBar





