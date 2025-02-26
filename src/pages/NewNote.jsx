import { useState } from "react";
import { Link } from "react-router-dom";

function NewNote(props) {

    const id = props.id;
    const setId = props.setId;
    const setNotes = props.setNotes;

    const [title, setTitle] = useState('title');
    const [content, setContent] = useState('content');
    const [color, setColor] = useState('gray');

    function save() {
        const title = document.getElementById("title").value;
        setTitle(title);
        const content = document.getElementById("content").value;
        setContent(content);
        const color = document.getElementById("color").value;
        setColor(color);
        setId(id => id + 1);
        setNotes(notes => [...notes, {id, title, content, color}]);
    }

    return (
        <div className="newNote">
            <input id="title" type="text" placeholder="Title"/>
            <textarea id="content" name="Note" placeholder="Note"></textarea>
            <div>
                <input id="color" type="color"/>
                <Link to="/">
                    <button onClick={save}>Save</button>
                </Link>
            </div>
        </div>
    );

}

export default NewNote;