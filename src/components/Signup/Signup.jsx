import React, { useState } from 'react';
import{Link}from'react-router-dom';
import V1 from '../assest/v4.mp4';
import Logo from'../assest/muscle.png';
import axios from 'axios';
const Signup=()=>{
   const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      password: '',
      email: '',
    });
  
    const [validationErrors, setValidationErrors] = useState({});
    const [validationMessage, setValidationMessage] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleValidation = async () => {
      try {
        const response = await axios.post('http://localhost/authentication/validaion.php', formData);
  
        const data = response.data;
        if (data.success) {
          setValidationMessage('Validation successful');
          // Proceed with further actions in your React app if validation is successful
        } else {
          setValidationErrors(data.errors);
        }
      } catch (error) {
        console.error('Validation request failed:', error);
      }
    };
 return<>
    <div className="container cardSignup">
             <div className="signupPage">
              <video src={V1}type="video/mp4" className="videoDiv" autoPlay muted loop/>
              <div className="textDiv">
               <h2 className="title text-center">JOIN US TO DO YOUR WOURKOUT</h2>
              </div>
             <div className="footerDiV ">
                <span className="text">Have an account</span>
              <Link to={'/'}> 
              <button className="btn">Sign in </button>
              </Link>
              </div>
              <div className="formDiv">
                 <div className="logo">
                 <img src={Logo} />
                 </div>
                 <div className="headerDiv text-center">
                 <h3>Let Us knew you</h3>
                 </div>   
                 <div className="formInput">
                   
                <form  action="http://localhost/authentication/signupconn.php" method="post" >
                <div className="input-box ">
                  <input  type="text" name="firstname"   value={formData.firstname} onChange={handleChange}className="form-control  " placeholder="First Name" required/>
                  {validationErrors.firstname && ( <p>{validationErrors.firstname}</p> )}
                  </div>
                  <div className="input-box">
                  <input  value={formData.lastname} onChange={handleChange} type="text" name="lastname" className="form-control "placeholder="Last Name"required/> 
                  {validationErrors.lastname && ( <p>{validationErrors.lastname}</p>  )}
                  </div>
                  <div className="input-box">
                  <input  value={formData.email} onChange={handleChange} type="email" name="email" className="form-control "placeholder="Email "required/> 
                  {validationErrors.email && (<p>{validationErrors.email}</p>)}
                  </div>
                  <div className="input-box">
                  <input value={formData.password}onChange={handleChange} type="password" name="password" className="form-control "placeholder="password"required/>
                  {validationErrors.password && (<p>{validationErrors.password}</p>)}
                 </div>
                <div className="btnform">
                 <button onClick={handleValidation}type="submit" className="btn btn-outline-success" >Sign Up</button>
                 {validationMessage && <p>{validationMessage}</p>}
                 </div>
                </form>
                
                </div> 
                </div>
              
              
              
             </div>
         </div>
    </>
        }

export default Signup;





