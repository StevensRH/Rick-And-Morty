import Card from '../Card/Card.jsx';
import style from './Cards.module.css'
const Cards = ({characters}) =>{
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
             onClose={() => window.alert('Emulamos que se cierra la card')}
             />
             )
           })

         } 
    </div>

   )};
export default Cards;