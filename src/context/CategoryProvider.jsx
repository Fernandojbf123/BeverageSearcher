import {createContext, useState, useEffect} from 'react'


const CategoryContext = createContext();

const CategoryProvider = ({children}) => {
  
    return (
    <CategoryContext.Provider
        value={{}}
    >
        {children}
    </CategoryContext.Provider>
  )
}

export {
    CategoryProvider
}

export default CategoryContext