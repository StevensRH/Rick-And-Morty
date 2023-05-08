import style from './Card.module.css'
import {Link} from 'react-router-dom'
const Card =({id, name, status, species, gender, origin, image, onClose})=> {

   return (
      <div className={style.animate}>
         <Link to={'/detail/${id}'}>
          <h2>{id}</h2> 
         </Link>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <div className={style.img}><img  src={image} alt='' /></div>
         
         <button className={style.cerrar}onClick={()=>{onClose(id)}}>Cerrar</button>
        
      </div>
   );
}
export default Card //como centrar un div? 