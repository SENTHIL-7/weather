import Headers from './Header'
import { useState } from 'react';
import {ThemeContext} from '../providers/Provider'

export default function Layout() {
    const [theme, setTheme] = useState('dark');
    const [ data , setData] = useState(null );
    const [ error , setError] = useState(null );
    const [ isLoading , setIsLoading] = useState(null );
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
    <Headers value={{data ,handleData ,error,handleError, isLoading ,handleIsLoading}} />
    </ThemeContext.Provider>
    </>
    )
    
}