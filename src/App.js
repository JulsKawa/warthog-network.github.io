/*import logo from './logo.svg';*/

import './App.css';
import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "./landing";

import News from "./routes/news";
import Getstarted from "./routes/getstarted";
import Whitepaper from './routes/whitepaper';
import Algorithim from './routes/algorithim';
import FAQs from './routes/FAQs';
function App() {
  
  const rootElement = document.getElementById("root");
  render(
    
    <Router>
     
      <Routes>
        
        <Route path="/" element={<Home />}  >
        <Route path="/" element={<Landing />}  />
        <Route path="/getstarted" element={<Getstarted />}  />
        <Route path="/news" element={<News />}  />
        <Route path="/algorithim" element={<Algorithim />}  />
        <Route path="/whitepaper" element={<Whitepaper />}  />
        <Route path="/faq" element={<FAQs />}  />
      
   
   
        </Route>
      </Routes>
    </Router>,
    rootElement
  );
}

const Home = () => (
  <div>
 <Outlet/>
 </div>);

export default App;
