import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import ListPage from "./Task/views/pages/ListPage";
import BordPage from "./Task/views/pages/BordPage";
import Gantchart from "./Task/views/pages/GantchartPage";
import SalesTop from "./Sales/views/pages/SalesTop";

function Content() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/Task/List`} element={<ListPage />} />
        <Route path={`/Task/Boad`} element={<BordPage />} />
        <Route path={`/Task/Gantchart`} element={<Gantchart />} />
        <Route path={`/sales`} element={<SalesTop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Content