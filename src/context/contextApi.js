import React, {createContext, useState, useEffect,} from "react"


import {fetchDataFromApi} from "../utils/Api";

export const Context = createContext();
console.log(typeof Context)

export const AppContext = (props) =>{
    const [loading, setLoading] = useState(false)
    const [searchResults, setsearchResults] = useState(false)
    const [selectCategories, setselectCategories] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() =>{
        fetchSelectedCategories(selectCategories)
    }, [selectCategories])

    const fetchSelectedCategories = (query) =>{
        setLoading(true);
        fetchDataFromApi(`search/?q${query}`).then(({contents}) =>{
            console.log(contents)
            setsearchResults(contents)
            setLoading(false)
        })
    }
    return(
        <Context.Provider value={{
            loading, 
            setLoading,
            searchResults, 
            setsearchResults,
            selectCategories, 
            setselectCategories,
            mobileMenu, setMobileMenu
        }}>
            {props.children}
        </Context.Provider>
    )
}