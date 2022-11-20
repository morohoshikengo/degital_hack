import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./common/components/SideBar";
const FixedSideMenu = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/Task`} element={<SideBar />} />
        <Route path={`/Task/List`} element={<SideBar />} />
        <Route path={`/Task/Boad`} element={<SideBar />} />
        <Route path={`/Task/Gantchart`} element={<SideBar />} />
        <Route path={`/sales`} element={<SideBar />} />
      </Routes>
    </BrowserRouter>
  );
};
export default FixedSideMenu;