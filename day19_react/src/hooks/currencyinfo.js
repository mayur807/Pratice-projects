import { useEffect, useState } from "react";
import React from 'react'

function useCurrencyinfo(currencyval) {
const [data,setdata] =  useState({});

useEffect(()=>{
fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-12-31/v1/currencies/${currencyval}.json
`)
.then(res => res.json())
.then(jsonres => setdata(jsonres[currencyval]))

},[currencyval])


return data
}

export default useCurrencyinfo