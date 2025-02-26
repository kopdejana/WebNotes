import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import NewNote from "./pages/NewNote";
import EditNote from "./pages/EditNote";

function App() {

    const [notes, setNotes] = useState(JSON.parse(
        localStorage.getItem('notes')
    ));
    const [id, setId] = useState(1);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home notes={notes}/>}/>
                <Route path="/new-note" element={<NewNote id={id} setId={setId} setNotes={setNotes}/>}/>
                <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
