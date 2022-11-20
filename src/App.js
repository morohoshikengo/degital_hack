/* App.js */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/views/pages/Login";
import RePassWord from "./login/views/pages/RePassWord";
import RePassMail from "./login/views/pages/RePassMail";
import RePassMailComp from "./login/views/pages/RePassMailComp";
import NewPassWord from "./login/views/pages/NewPassWord";
import Top from "./ContentPages";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/RePassWord`} element={<RePassWord />} />
        <Route path={`/RePassMail`} element={<RePassMail />} />
        <Route path={`/RePassMailComp`} element={<RePassMailComp />} />
        <Route path={`/NewPassWord`} element={<NewPassWord />} />
        <Route path={`/`} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;