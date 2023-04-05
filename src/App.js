import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Start from "./pages/start/Start";
import Individual from "./pages/individual/Individual";
import Corporation from "./pages/corporation/Corporation";
import Confirmation from "./pages/confirmation/Confirmation";
import Welcome from "./pages/welcome/Welcome";
import Open from "./pages/open/Open";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Open/>}/>
      <Route path = "/welcome" element = {<Welcome/>}/>
      <Route path= "/start" element = {<Start/>}/>
      <Route path = "/individual" element = {<Individual/>}/>
      <Route path = "/corporation" element = {<Corporation/>}/>
      <Route path = "/confirmation" element = {<Confirmation/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
