// standardize approach :- whenever we use a custom hook, we prefix it with 'use'

import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => { // useEffect is used to fetch data when the component mounts or when the currency changes
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency]) // dependency array - when currency changes, useEffect will run again
    console.log(data);
    return data
}

export default useCurrencyInfo; // exporting the custom hook(by using this :- return entire method) so that it can be used in other components