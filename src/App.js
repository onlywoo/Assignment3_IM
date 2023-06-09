import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import Design from "./pages/Design";
import Art from "./pages/Art";
import intArt from "./pages/intArt";
import Essay from "./pages/Essay";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import Reflection from "./pages/Reflection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/Menu" Component={Menu} />
        <Route exact path="/Design" Component={Design} />
        <Route exact path="/intArt" Component={intArt} />
        <Route exact path="/Art" Component={Art} />
        <Route exact path="/Essay" Component={Essay} />
        <Route exact path="/Blog1" Component={Blog1} />
        <Route exact path="/Blog2" Component={Blog2} />
        <Route exact path="/Blog3" Component={Blog3} />
        <Route exact path="/Relfection" Component={Reflection} />
      </Routes>
      <Footer> </Footer>
    </div>
  );
}

export default App;
