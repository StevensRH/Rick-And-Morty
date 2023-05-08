import style from './SearchBar.module.css'
import { useState } from 'react';

const SearchBar = ({onSearch}) =>{
   const [id, setId] = useState("");
   const handleChange = (event) =>{
setId(event.target.value)
   };
   return (
     <div className={style.contenedor}> 
         <input onChange={handleChange}className={style.input} id='search'placeholder='Search...' value={id} type='search' />
         <button className={style.button}onClick={()=> onSearch(id)} >Agregar</button>
      </div>
      );
   
};

export default SearchBar;