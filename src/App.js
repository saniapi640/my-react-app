import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home'
import ClientWise from './Views/ClientWise'
import DateWise from './Views/DateWise'
import Property from './Views/Property';
import Login from './Components/Login';
function App() {

  const [token, setToken] = useState()
 /*  if(!token) {
    return <Login setToken={setToken} />
  } */
  return (
    <div className="relative pb-10 min-h-screen bg-gray-100">
      <Router>
        
        <Header />

        <div className="md:p-3 container mx-auto">
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/properties/:id"  element={<Property />}>
          </Route>



          <Route path="/client-wise" element={<ClientWise />}>
           </Route>
           <Route path="/date-wise" element={<DateWise />}>
           </Route>
         
        </Routes>
        </div>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
