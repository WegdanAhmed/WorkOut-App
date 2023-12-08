import React ,{useState}from 'react';
import{Link}from'react-router-dom';
import V1 from '../assest/v4.mp4';
import Logo from'../assest/muscle.png'
import{AiOutlineSwapRight} from'react-icons/ai';
import axios from 'axios';
const Login=()=>{
  const [formData, setFormData] = useState({
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
    <div className="container cardLogin">
        <div className="loginPage">
         <video src={V1}type="video/mp4" className="videoDiv" autoPlay muted loop/>
         <div className="textDiv">
          <h2 className="title text-center">JOIN US TO DO YOUR WOURKOUT</h2>
         </div>
        <div className="footerDiVLogin ">
           <span className="text">Do not have an account</span>
         <Link to={'/signup'}> 
         <button className="btn">Sign Up</button>
         </Link>
         </div>
         <div className="formDivLogin">
            <div className="logoLogin">
            <img src={Logo} />
            </div>
            <div className="headerDivLogin text-center">
            <h3>Welcome Back</h3>
            </div>   
            <div className="formInputLogin">
                <form  action="http://localhost/authentication/signinconn.php" method="post" >
                 <div className="input-box">
                  <input  value={formData.email} onChange={handleChange} type="email" name="email" className="form-control m-3"placeholder="Email " required/> 
                  {validationErrors.email && (<p>{validationErrors.email}</p>)}
                  </div>
                  <div className="input-box">
                  <input value={formData.password}onChange={handleChange}  type="password" name="password" className="form-control m-3"placeholder="password" required/>
                  {validationErrors.password && (<p>{validationErrors.password}</p>)}
                 </div>
                 <div className="btnformLogin">
                 <button  onClick={handleValidation}type="submit" className="btn btn-outline-info">
                  <AiOutlineSwapRight className="icon"/>Login</button>
                  {validationMessage && <p>{validationMessage}</p>}
                 </div>
                 </form>
            </div>
            
          </div>
         
        </div>
    </div>
   
   </>
}
export default Login;
   