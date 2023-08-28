import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [searchterm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  const fetchData =useCallback(async () => {
    setLoading(true);
    try{
      const response = await fetch(`${url}${searchterm}`);
      const data = await response.json();
      const {drinks} = data; // Get drinks from API...data
      if(drinks){
        const newDrinks = drinks.map((item) => {
          const {
            idDrink, 
            strDrink, 
            strAlcoholic, 
            strGlass, 
            strDrinkThumb
          } = item;

          return {
            id: idDrink, 
            name: strDrink, 
            image: strDrinkThumb, 
            info: strAlcoholic, 
            glass: strGlass
          };

        })
      
        setCocktails(newDrinks);
      }
      else{ // If drinks is null or not found
        setSearchTerm([]);
      }

      setLoading(false);
    }
    catch(error){
      console.log(error);
      setLoading(false);
    }
  }, [searchterm])

  useEffect(() => {
    fetchData();
  }, [searchterm, fetchData]);

  return (
    <AppContext.Provider value={ {
      loading, setSearchTerm, cocktails
    }}>{children}</AppContext.Provider>
  );
}

// Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }