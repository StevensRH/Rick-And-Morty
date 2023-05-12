import style from './Card.module.css'
import { Link } from 'react-router-dom'
import { addFav, removeFav } from "../../Redux/actions"
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';

const Card = ({ id, name, status, species, gender, origin, image, onClose }) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav({ id, name, status, species, gender, origin, image, onClose });
    setIsFav(!isFav)
  };

  return (

    <div className={style.animate}>
      {
        (<button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>)
      }

      <Link to={`/detail/${id}`}>
        <h2>{id}</h2>
      </Link>
      <h2>{name}</h2>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <div className={style.img}><img src={image} alt='' /></div>

      <button className={style.cerrar} onClick={() => { onClose(id) }}>Cerrar</button>

    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  }
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Card)