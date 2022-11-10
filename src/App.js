import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./componets/navegacion/Navbar";
import Inicio from "./componets/pages/Inicio";
import Ingreso from "./componets/pages/Ingreso";
import Items from "./componets/pages/Items";
import ItemListeContainer from "./componets/pages/ItemListContainer";
import CartWidget from "./componets/pages/CartWidget";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar>
          <Routes>
            <Route path="/Inicio" exact component={Inicio} />
            <Route path="/Ingreso" exact component={Ingreso} />
            <Route path="/Items" exact component={Items} />
          </Routes>
        </Navbar>
      </Router>
      <ItemListeContainer greeting={"este es el greeting"}/>
      <CartWidget/>
    </div>
  );
}

export default App;
