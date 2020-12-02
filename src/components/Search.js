import React, {useState}  from 'react';

/* useState  (hooks api) adds react state to function components,
accepts one argument which is the initial state, and then
it returns an array with the current state (this.state) and
a function to update it (this.setState)
*/

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");
    
    const handleSearchInputChanges = (e) => {
      setSearchValue(e.target.value);
    }
  
    const resetInputField = () => {
      setSearchValue("")
    }
  
    const callSearchFunction = (e) => {
      e.preventDefault();
      props.search(searchValue);
      resetInputField();
    }
  
    return (
        <form className="search">
          <input
            value={searchValue}
            onChange={handleSearchInputChanges}
            type="text"
          />
          <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
      );
  }
  
  export default Search;