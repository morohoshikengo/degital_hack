import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./common/components/TopBar";
const FixedTopMenu = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/Task`} element={<TopBar />} />
        <Route path={`/Task/List`} element={<TopBar />} />
        <Route path={`/Task/Boad`} element={<TopBar />} />
        <Route path={`/Task/Gantchart`} element={<TopBar />} />
      </Routes>
    </BrowserRouter>
  );
};
export default FixedTopMenu;