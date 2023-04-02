import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Rams from "./pages/Rams";
import Update from "./pages/Update";
import Details from "./pages/Details";
import "./style.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Rams/>}/>
          <Route path="/update/:id" element = {<Update/>}/>
          <Route path="/details/:id" element = {<Details/>}/>
      
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
