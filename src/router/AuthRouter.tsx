import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./../pages/LoginPage";
import SingUpPage from "./../pages/SingUpPage";
import MainPage from "../pages/MainPage";
import ContentsPage from "../pages/ContentsPage";

export default function AuthRouter() {
  return (
    <Routes>
      <Route index path="/" element={<MainPage />} />
      <Route path="/signup" element={<SingUpPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/todos" element={<ContentsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
