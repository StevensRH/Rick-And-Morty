import style from './SearchBar.module.css'
const SearchBar = ({onSearch}) =>{
   return (
      
      <div className={style.cont}> 
         <span class="icon"><i class="fa fa-search"></i></span>
         <input id='search'placeholder='Search...' type='search' />
         <button  onClick={onSearch}>Agregar</button>
      </div>
      
   );
};
{/* <i class="fa fa-search"></i>
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"> */}


export default SearchBar