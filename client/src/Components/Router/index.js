import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Weather from "../../Pages/Weather";
import Settings from "../../Pages/Settings";
function Router() {
  return (
    <Routes>
        <Route path = "/weather" element={<Weather />}></Route>
        <Route path = "/settings" element= {<Settings />}></Route>
    </Routes>
  );
}

export default Router