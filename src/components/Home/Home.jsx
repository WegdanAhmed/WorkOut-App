import { Component } from "react";
import { Link } from "react-router-dom";
import V3 from "../assest/v3.mp4";
import V4 from "../assest/Fit in 10 Minuten_ Mit diesen Übungen für Zuhause klappt's.jpg";
import V5 from "../assest/Future _ Personal Training, Made Modern.jpg";
import V6 from "../assest/macro.jpg";

export default class Home extends Component{
    render(){
        return<>
       
        <div className="navPage">
        {/* background */}
       <video src={V3} type="video/mp4"  autoPlay muted loop/>
      {/*navbar  */}
       <nav className="contentnav navbar navbar-expand-lg ">
         <div className="container-fluid">
        <h2 className="logo ">Workout</h2>
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
     <div className="collapse navbar-collapse  " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/calculatingcalorise">calculating Calorise</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Exercises
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
      <div className="add">
        <h1>REACH YOUR GOAL AT WORKOUT</h1>
      </div>

       </div>
       {/* part2 */}
       <div className="part2 container">
         <div className="row">
         <div className="aboutus col-md-6  col-s-12">
          <h2>Exercise & Fitness</h2>
          <p>Exercising regularly, every day if possible, is the single most important thing you can do for your health. In the short term, exercise helps to control appetite, boost mood, and improve sleep. In the long term, it reduces the risk of heart disease, stroke, diabetes, dementia, depression, and many cancers.</p>
         </div>
         <div className="aboutusVed col-md-6 col-s-12">
         <iframe  src="https://www.youtube.com/embed/w9w50DqXU5o" title="Workout - Fitness Video! | Gym Motivation"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
         </div>
         </div>
       </div>
       {/* part3 */}
       <div className="part3 container">
        <div className="row">
            <div className="boximg col-md-6 ">
               <img src={V4}/>
            </div>
            <div className="boxtxt col-md-6 ">
                <h2>Do more for your core</h2>
                <p>A strong core serves as the foundation for upper- and lower-body movements. It helps maintain a healthy posture and prevents back injuries and falls. Like all muscles, the core muscles weaken as people age, so it's important for people to do core exercises on a regular basis. The best core exercises are movements that activate as many of the core muscles as possible at one time. Some examples include planks, diagonal chops, and deadbugs.</p>
            </div>
        </div>
       </div>
        {/* part5 */}
        <div className="part5 container">
       <div className="boximgP5 col-md-12 ">
               <img src={V6}/>
            </div>
        <div className="boxtxtp5 col-md-12 ">
               <h3>Lose fat, build muscle, increase energy levels, and feel better than ever </h3>
               <h3>Personal Macros-based Coaching is the simplest and most effective way to accelerate you towards your goals!</h3>
             </div>   
       </div>
           {/* part4 */}
       <div className="part4 container">
        <div className="row">
        <div className="boximgP4 col-md-6 ">
               <img src={V5}/>
            </div>
        <div className="boxtxtP4 col-md-6 ">
                <h2>Step up your running and walking workouts</h2>
                <p>Running and walking are two of the best exercises — and among the easiest to adopt — for almost everyone. But it can be easy to get in stuck in a rut. Some ways to reignite the excitement and boost commitment for these activities are to set goals and challenges, enlist a workout buddy, explore new routes, do more interval training, and buy fun accessories.</p>
           </div>
        </div>
       </div>
      {/* part6 */}
      <div className="part6 container">
        <h2>SHOULD I TRACK MY MACROS?</h2>
        <h3>Not everybody needs to track their macronutrient intake. But plenty of people find that as their fitness and physique goals get more specific, dialing in their nutrition in this way helps them fuel their training and achieve better results. According to one expert, it can be helpful even if it's just a temporary experiment.</h3>
      </div>
        </>
    }
}