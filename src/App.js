/*import logo from './logo.svg';*/

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import Landing from "./landing";
import Algorithim from "./routes/algorithim";
import FAQs from "./routes/FAQs";
import Getstarted from "./routes/getstarted";
import News from "./routes/news";
import Whitepaper from "./routes/whitepaper";

function App() {
  const rootElement = document.getElementById("root");
  render(
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Landing />} />
          <Route path="/getstarted" element={<Getstarted />} />
          <Route path="/news" element={<News />} />
          <Route path="/algorithim" element={<Algorithim />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/faq" element={<FAQs />} />
        </Route>
      </Routes>
    </Router>,
    rootElement,
  );
}

const Home = () => (
  <div>
    <Outlet />
  </div>
);

export default App;
