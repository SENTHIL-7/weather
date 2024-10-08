import { useContext, useEffect, useState } from "react";
import '../styles/Header.css';
import {ThemeContext} from '../providers/Provider'
import axios from '../axios';
import {API_KEY} from '../constant/api.constant'

export default function Header({handleData ,handleError,handleIsLoading}){
    const [ search , setSearch] = useState('New York');
    function handleSearch(value){ 
        setSearch(value)
    }
    function handleSubmit(){
        getWeatherData()
// call api
    }
    function onIsLoading(isLoading){
        handleIsLoading(isLoading)
    }

    async function getWeatherData(){
        onIsLoading(true)
        const response = await axios.get(`forecast?access_key=${API_KEY}&query=${search}`)
        if(response.data.error){
            handleError(response.data.error)
        }
        else if(response.data){
            handleData(response.data)
            handleError(null)
        }
        onIsLoading(false)
    }
    useEffect(()=>{
//TODO write hear the axios or react query for getting wheather value
    },[search])
     return (
        <>
        <div className="header">
        {/* <ToggleButton /> */}
        <SearchBar search={search} handleSearch={handleSearch} handleSubmit={handleSubmit}/>
        {/* <CurrentLocation /> */}
        </div>
        </>
     )
   
}

function ToggleButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleToggle = () => {
        toggleTheme();
    };
  return(
    <>
    <label className="switch">
        <input type="checkbox" onChange={handleToggle}  checked={theme === 'dark'}/>
        <span className="slider round"></span>
   </label>

    </>
  )
}

function SearchBar ({search , handleSearch ,handleSubmit}){
    function handleSearchEvent(e){
        handleSearch(e.target.value)
    };
    function handleKeyDown(event){
         if (event?.key === 'Enter') {
            handleSubmit()
          }
    }
   return (
    <>
    <div id="input_container">
    <input type="text" id="input" value={search} onChange={handleSearchEvent}  onKeyDown={handleKeyDown} />
    <img src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" onClick={()=>handleSubmit()} id="input_img"/>
    </div>
    </>
   )
}

function CurrentLocation(){
   return (
    <button className="location-btn"> 
    <img className="icon" src="https://img.icons8.com/?size=100&id=aUUccawW8fsB&format=png&color=000000"  />
    <div>Current Location</div></button>
   )
}

