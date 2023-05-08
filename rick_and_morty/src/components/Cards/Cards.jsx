import Card from '../Card/Card.jsx';
import style from './Cards.module.css'
const Cards = ({characters, onClose}) =>{
   return ( 
    <div className={style.contenedor}>
        {
           characters.map((char)=>{
             return(
             <Card 
             key = {char.id}
             id = {char.id}
             name = {char.name}
             species = {char.species}
             gender = {char.gender}
             image = {char.image}
             origin = {char.origin.name}
             status = {char.status}
             onClose = {onClose}
             />
             )
           })

         } 
    </div>

   )};
   
export default Cards;