import { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import calculatingCalorise from './components/calculatingCalorise/calculatingCalorise';
import Abdominals from './components/Exercies/Abdominals';
import Abductors from './components/Exercies/Abductors';
import Biceps from './components/Exercies/Biceps';
import Calves from './components/Exercies/Calves';
import Chest from './components/Exercies/Chest';
import Forearms from './components/Exercies/Forearms';
import Glutes from './components/Exercies/Glutes';
import Hamstrings from './components/Exercies/Hamstrings';
import Lats from './components/Exercies/Lats';
import LowerBack from './components/Exercies/LowerBack';
import Neck  from './components/Exercies/Neck';
import Quadriceps from './components/Exercies/Quadriceps';
import Shoulders from './components/Exercies/Shoulders';
import Traps from './components/Exercies/Traps';
import Triceps from './components/Exercies/Triceps';
import UpperBack from './components/Exercies/UpperBack';
import {Routes,Route} from 'react-router-dom';
import Adductors from './components/Exercies/Adductors';
export default class App extends Component{
    render(){
        return<>
    <Routes>
       <Route path='/' Component={Login}/>
       <Route path='/signup' Component={Signup}/>
       <Route path='/home' Component={Home}/>
       <Route path='/calculatingcalorise' Component={calculatingCalorise}/>
       <Route path='/abdominals' Component={Abdominals}/>
       <Route path='/abductors' Component={Abductors}/>
       <Route path='/adductors' Component={Adductors}/>
       <Route path='/biceps' Component={Biceps}/>
       <Route path='/calves' Component={Calves}/>
       <Route path='/chest' Component={Chest}/>
       <Route path='forearms' Component={Forearms}/>
       <Route path='/glutes' Component={Glutes}/>
       <Route path='/hamstrings' Component={Hamstrings}/>
       <Route path='/lats'Component={Lats}/>
       <Route path='/lowerback'Component={LowerBack}/>
       <Route  path='/neck'Component={Neck}/>
       <Route path='/quadriceps'Component={Quadriceps}/>
       <Route path='/shoulders' Component={Shoulders}/>
       <Route path='/traps' Component={Traps}/>
       <Route path='/triceps' Component={Triceps}/>
       <Route path='/upperback' Component={UpperBack}/>
       </Routes>
        </>
    }
}