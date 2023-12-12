import { Component } from "react";
import { Link } from "react-router-dom";

export default class Lats extends Component{
    render(){
        return<>
           {/* nav part */}
        
           <nav className="contentnav navbar navbar-expand-lg bg-dark ">
         <div className="container-fluid">
        <h2 className="logo ">Workout</h2>
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
     <div className="collapse navbar-collapse  " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/calculatingcalorise">calculating Calorise</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Exercises List
          </Link>
          <ul className="list dropdown-menu bg-dark">
            <li><Link className="dropdown-item" to="/abdominals">Abdominals</Link></li>
            <li><Link className="dropdown-item" to="/abductors">Abductors</Link></li>
            <li><Link className="dropdown-item" to="/adductors">Adductors</Link></li>
            <li><Link className="dropdown-item" to="/biceps">Biceps</Link></li>
            <li><Link className="dropdown-item" to="/calves">Calves</Link></li>
            <li><Link className="dropdown-item" to="/chest">Chest</Link></li>
            <li><Link className="dropdown-item" to="/forearms">Forearms</Link></li>
            <li><Link className="dropdown-item" to="/glutes">Glutes</Link></li>
            <li><Link className="dropdown-item" to="/hamstrings">Hamstrings</Link></li>
            <li><Link className="dropdown-item" to="/lats">Lats</Link></li>
            <li><Link className="dropdown-item" to="/lowerback">Lower Back</Link></li>
            <li><Link className="dropdown-item" to="/neck">Neck</Link></li>
            <li><Link className="dropdown-item" to="/quadriceps">Quadriceps</Link></li>
            <li><Link className="dropdown-item" to="/shoulders">Shoulders</Link></li>
            <li><Link className="dropdown-item" to="/traps">Traps</Link></li>
            <li><Link className="dropdown-item" to="/triceps">Triceps</Link></li>
            <li><Link className="dropdown-item" to="/upperback">Upper Back</Link></li>
          </ul>
        </li>
   </ul>
    </div>
  </div>
        </nav>
        {/* address part */}
        <div className="addressPart">
            <h2>Lats </h2>
           {/* <br />
            <p>EXERCISE PRIMARY MUSCLE</p> */}
        </div>
        </>
    }
}