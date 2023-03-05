import { useEffect } from "react";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/todos");
    }
  }, []);
  return (
    <div className="container">
      <h2>MainPage</h2>
      <Login />
    </div>
  );
}
