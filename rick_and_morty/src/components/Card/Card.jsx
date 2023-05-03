import style from './Card.module.css'
const Card =({id, name, status, species, gender, origin, image, onClose})=> {

   return (
      <div className={style.contenedor}>
         
         <h2>{id}</h2>
         <h2>{name }</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         
         <img class="img" src={image} alt='' />
         <button onClick={onClose}>Cerrar</button>
      </div>
   );
}
export default Card //como centrar un div? 