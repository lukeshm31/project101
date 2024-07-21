import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {

    const [data, setData] = useState({})

    useEffect(()=>{
        setData(currency+"..")
    }, [currency])

    console.log(data)

    return data;

}

export default useCurrencyInfo;