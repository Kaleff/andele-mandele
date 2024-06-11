import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-lg-5 topLinks">
          <Link to={'episodes'}>Episodes</Link> 
          <Link to={'characters'}>Characters</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
