import React, { createContext, useState, useEffect, } from "react"

// importing the fetchDataFromApi function from api.js file which contains our search data
import { fetchDataFromApi } from "../utils/Api";

// creating a context for the data which we want to use globaly
export const Context = createContext(); // type is object

// creating our component to store our globaly used data
export const AppContext = (props) => {
    // creating state varibles which we want to use globally 
    const [loading, setLoading] = useState(false)
    const [searchResults, setsearchResults] = useState([])
    const [selectCategories, setselectCategories] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

    // fetching the categories from api and storing them in a variable
    useEffect(() => {
        fetchSelectedCategories(selectCategories)
    }, [selectCategories])

    // creating a function distrubute data according to their category
    const fetchSelectedCategories = (query) => {
        // here we are setting our loader to true when we click on a cetegory ex: Music
        setLoading(true);

        // here we are using the function fetchDataFromApi to get data and creating a promise of getting content from api when a user search for anything like ex: cricket
        fetchDataFromApi(`search/?q${query}`).then(({ contents }) => {
            console.log(contents)
            setsearchResults([contents])
            setLoading(false) // here we setting our loader to false when our data is loaded succesfully
        })
    }
    return (
        // it is an context.provider which contains the value which we want to use globally
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