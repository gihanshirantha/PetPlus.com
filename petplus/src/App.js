
import './App.css';
import Home from './Page/Home'

import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    Aos.init();
  },[]);
   
  return (
    <div >
      <Home/>
    </div>
  );
}

export default App;
