import { BrowserRouter, Routes, Route } from "react-router";

// 页面
import App from "../App";
import Nest from "../pages/Nest";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/nest" element={<Nest />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
