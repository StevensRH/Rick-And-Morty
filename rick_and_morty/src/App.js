import './App'
import style from './App.module.css'
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar'
import {useState} from 'react';
import axios from 'axios';
import {Routes, Route} from "react-router-dom"   
import About from './components/Componentes/About'
import Detail from './components/Componentes/Detail'  

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};
function App() {
   

    const [characters, setCharacters] = useState([]);

    function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };
   const onClose = (id) => {
      setCharacters(
        characters.filter((char) => {
          return char.id !== Number(id);
         })
      )
   }; 
      
   return (
       
      <div className={style.App}>
         <NavBar onSearch={onSearch}/>

         <Routes>
         <Route path='/about' element={<About/>}/>
         <Route path='/home' element={<Cards characters={characters} onClose = {onClose} />}/>
         <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
         
         
      </div>
   );
}

export default App;
