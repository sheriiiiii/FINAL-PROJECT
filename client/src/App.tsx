//import React from 'react';
import InfoPage from "./components/pages/InfoPage";
import LogInPage from "./components/pages/LogInPage";
import SignUpPage from "./components/pages/SignUpPage";
import Homepage from './components/pages/Homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

/*const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InfoPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
};

export default App;*/

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
