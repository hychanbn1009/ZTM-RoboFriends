import React from "react";

const SearchBox =({searchfield,searchChange})=>{
    return(
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    )
}

//destructuring>allow us to grab the props object and grab its properties
export default SearchBox