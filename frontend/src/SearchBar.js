import React, {useState} from "react";

// const[filter, setFilter] = useState("")

function SearchBar() {

    function search(e){
        // setFilter((filter)=>{e.target.value})
        console.log("fdsf")
    }

    return (
        <div className="SearchBar">
            <input onChange = {search} placeholder="Search for a show!" />
        </div>
    )
}

export default SearchBar





