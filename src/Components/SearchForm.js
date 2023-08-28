import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context';

const SearchForm = () => {

  const {setSearchTerm} = useGlobalContext();
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <section className='section search'>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search Your Favourite Cocktail</label>
          <input 
            type="text" 
            id='name' 
            ref={searchValue}
            onChange={searchCocktail} 
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
