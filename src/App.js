import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom' ;
import Home from './Home';
import About  from './About';
import Usagesearch from './Usagesearch';
import Createusageattribute from './Createusageattribute';
import Creatingusage from './Creatingusage';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />,
        <Route path='/about' element={<About />} />,
        <Route path='/usagesearch' element={<Usagesearch />} />,
        <Route path='/createusageattribute' element={<Createusageattribute />} />,
        <Route path='/creatingusage' element={<Creatingusage />}/>

      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App