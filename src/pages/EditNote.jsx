import { Link } from "react-router-dom";
import { useState } from "react";

function EditNote(props) {

    const path = window.location.pathname;
    const id = Number.parseInt(path.substring(11));

    const notes = props.notes;
    const setNotes = props.setNotes;

    const [title, setTitle] = useState(notes[id].title);
    const [content, setContent] = useState(notes[id].content);
    const [color, setColor] = useState(notes[id].color);

    function save() {
        setNotes(notes => [...notes.slice(0, id), {id, title, content, color}, ...notes.slice(id+1)]);
    }

    return (
        <div className="editNote">
            <input id="title" type="text" placeholder="Title" value={title} onChange={(t) => setTitle(t.target.value)}/>
            <textarea name="Note" placeholder="Note" value={content} onChange={(c) => setContent(c.target.value)}></textarea>
            <div>
                <input type="color" value={color} onChange={(c) => setColor(c.target.value)}/>
                <Link to="/">
                    <button onClick={save}>Save</button>
                </Link>
            </div>
        </div>
    );

}

export default EditNote;