import {createContext, useState, useEffect} from 'react'
import axios from 'axios';

const CategoryContext = createContext();

const CategoryProvider = ({children}) => {
  
    const [categories, setCategories] = useState([])

    async function fetchCategories () {
        try {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
            const {data} = await axios(url)
            setCategories(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }
    



    useEffect ( () => {
        fetchCategories()
    },[])




    return (
    <CategoryContext.Provider
        value={{
            categories,
        }}
    >
        {children}
    </CategoryContext.Provider>
  )
}

export {
    CategoryProvider
}

export default CategoryContext
