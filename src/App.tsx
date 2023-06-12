import { Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default App;
