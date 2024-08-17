import { useContext, useEffect, useState } from "react";
import '../styles/Header.css';
import {ThemeContext} from '../providers/Provider'

export default function Header({data ,handleData ,error,handleError, isLoading ,handleIsLoading}){
    const [ search , setSearch] = useState('tirunelveli');
    function handleSearch(value){
        setSearch(value)
    }
    function handleSubmit(){
        console.log('search value',search)
// call api
    }
    useEffect(()=>{
//TODO write hear the axios or react query for getting wheather value
    },[search])
     return (
        <>
        <div className="header">
        <ToggleButton />
        <SearchBar search={search} handleSearch={handleSearch} handleSubmit={handleSubmit}/>
        <CurrentLocation />
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
   return (
    <>
    <div id="input_container">
    <input type="text" id="input" value={search} onChange={handleSearchEvent} />
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