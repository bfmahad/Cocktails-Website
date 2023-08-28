import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {

  const {loading, cocktails} = useGlobalContext();
  console.log(cocktails);


  if(loading){
    return <Loading />
  }

  // It works when loading is false because components that are on top should work first
  if(cocktails.length < 1){
    return (
      <h2 className="section-title">
        No Cocktails Matches Your Criteria!
      </h2>
    )
  }
  
  return (
    
    <section className='section'>
      <h2 className="section-title">
        Cocktails
      </h2>
      <div className="cocktails-center">
        {cocktails.map((eachCocktail) => {
          return <Cocktail key={eachCocktail.id} {...eachCocktail} />;
        })}
      </div>
    </section>

  )
}

export default CocktailList
