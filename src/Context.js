import React, {useContext,useEffect,useState} from "react";
import axios from "axios";
const AppContext = React.createContext();
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';





const AppProvider = ({children}) =>{
  const [meals,setMeals] = useState([]);
  const [search,setSearch] = useState('');



  const fetchMeals = async(url) => {
    try {
      const {data} = await axios.get(url)
      if (data.meals){
        setMeals(data.meals);
      }
      else{
        setMeals([]);
      }
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(()=>{
    fetchMeals(allMealsUrl)
  },[])

  const fetchRandomMeal = ()=>{
    fetchMeals(randomMealUrl)
  }

  // useEffect(() => {
  //   if (!search) return
  //   fetchMeals(`${allMealsUrl}${search}`)
  // }, [search])

  return <AppContext.Provider value={{meals,setMeals,setSearch,search,fetchRandomMeal}}>
    {children}
  </AppContext.Provider>
}

const useGlobalContext = () =>{
  return useContext(AppContext);
}

export {AppProvider, useGlobalContext}