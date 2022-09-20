import React,{Component} from 'react';
import './commenResource/css/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import Footer from './commenResource/Footer/footer';
import Headre from './commenResource/Header/headre';
import Componant1 from './commenResource/Componant1/Componant1'
import Componant2 from './commenResource/Componant2/componant2'
import Componant3 from './commenResource/Componant3/componant3'
import Componant4 from './commenResource/Componant4/componant4'
import Componant5 from './commenResource/Componant5/componant5'
import Componant6 from './commenResource/Componant6/componant6'
import Alert from './commenResource/Alart/Alart'



class App extends Component{
  render(){
  return (
     <div className="App">
       <Headre/>
       <Alert/>
       <Componant1/>
       <Componant2/>
       <Componant3/>
       <Componant4/>
       <Componant5/>
       <Componant6/>
       <Footer/> 
     </div>
  
  );
  }

}

export default App;
