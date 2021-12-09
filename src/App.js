import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Menu from "./components/common/Menu";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import Logout from "./components/pages/Logout"

function App() {
  return (
      <>
          <BrowserRouter>
              <Menu/>
              <Routes>
                  {/*<Route component={NotFound} />*/}
                  <Route exact path="/" element={<Home/>}/>
                  <Route exact path="/oddaj-rzeczy" element={<Home/>}/>
                  <Route exact path="/logowanie" element={<Login/>}/>
                  <Route exact path="/rejestracja" element={<Register/>}/>
                  <Route exact path="/wylogowano" element={<Logout/>}/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;