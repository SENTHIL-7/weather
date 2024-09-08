import Headers from './Header'
import { useEffect, useState } from 'react';
import {ThemeContext} from '../providers/Provider'
import Wheather from './Weather';
import {FORECAST} from '../constant/api.constant'
import '../styles/Layout.css'
export default function Layout() {
    const [theme, setTheme] = useState('dark');
    const [ data , setData] = useState(FORECAST);
    const [ error , setError] = useState(null );
    const [ isLoading , setIsLoading] = useState(null );
    // useEffect(()=>{
    //     // console.log('FORECAST',FORECAST)
    //     // console.log('data asdwefew',data)
    //     // setData(FORECAST)
    // },[theme])
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    function handleData(data){
         setData(data)
    }

    function handleError(error){
        setError(error)
   }

   function handleIsLoading(isLoading){
    setIsLoading(isLoading)
}
    return (<>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <Headers data={data} handleData={handleData} handleError={handleError} handleIsLoading={handleIsLoading} />
    {error?<h1 className='no-data'>no data found </h1>:isLoading ? <h1 className='no-data'>Loading ...</h1>:<Wheather data={data}></Wheather>}
    </ThemeContext.Provider>
    </>
    )
    
}