import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewNote from "./pages/NewNote";
import EditNote from "./pages/EditNote";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new-note" element={<NewNote/>}/>
            <Route path="/edit-note/:id" element={<EditNote/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
