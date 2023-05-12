import { Link } from 'react-router-dom';
import style from "./Form.module.css"
import { useState } from 'react';
import validation from "../validation";

const Forms = ({login}) => {
    const [userData, setUserData] = useState({
      email: "",
      password: "",
    });
  
    
    const  [forms, setEmail] =useState('');
    const  [password, setPassword] =useState('');
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        login (userData)
    };  
    
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setErrors(validation({...userData,[event.target.name]: event.target.value }))
        setUserData({ ...userData,[event.target.name]: event.target.value,})
    };

    return(
      <div className={style.cont}>
        <h1>
          Inicio De Sesion 
        </h1>
        <form className={style.form}>
          <label htmlFor="email">Email: </label>
          <input
          placeholder="Username"
          onChange={handleChange}
          value={userData.email}
          type="text"
          name="email"
        />
        {errors.e1 ? (<p>{errors.e1}</p>)
        : errors.e2 ? (<p>{errors.e2}</p>) 
        : (<p>{errors.e3}</p>)
        }
        <hr />

        <label htmlFor="password">Password: </label>
        <input
          onChange={handleChange}
          value={userData.password}
          type="password"
          name="password"
        />
        {
            errors.p1 ? <p>{errors.p1}</p> : (<p>{errors.p2}</p>)
        }
        <br />
        <button className={style.submit} onClick={handleSubmit} type="submit">Enviar</button>
        </form>
        </div>
        )}
export default Forms;
//       <div class="login-form">
//      <h1>Vini</h1>
//      <div class="form-group ">
//        <input
//           placeholder="Username"
//           onChange={handleChange}
//           value={userData.email}
//           type="text"
//           name="email"
//         />
//        {errors.e1 ? (<p>{errors.e1}</p>)
//         : errors.e2 ? (<p>{errors.e2}</p>) 
//         : (<p>{errors.e3}</p>)
//         }
//        <i class="fa fa-user"></i>
//      </div>
//      <div class="form-group log-status">
//        <input
//           onChange={handleChange}
//           value={userData.password}
//           type="password"
//           name="password"
//         />
//         {
//             errors.p1 ? <p>{errors.p1}</p> : (<p>{errors.p2}</p>)
//         }
//        <i class="fa fa-lock"></i>
//      </div>
//       <span class="alert">Invalid Credentials</span>
//       <a class="link" href="#">Lost your password?</a>
//      <button type="button" class="log-btn" >Log in</button>
//      log
    
//    </div>
    