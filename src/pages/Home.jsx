import { useEffect } from "react";
import Note from "../Note";
import { Link } from 'react-router-dom';

function Home(props) {

    const notes = props.notes;

    let notesComponents = notes.map(
        note => 
        <Link key={note.id}  to={"/edit-note/" + note.id}>
            <Note key={note.id} title={note.title} content={note.content} color={note.color}/>
        </Link>
    );

    useEffect(() => {
        notesComponents = notes.map(
            note => 
            <Link key={note.id}  to={"/edit-note/" + note.id}>
                <Note key={note.id} title={note.title} content={note.content} color={note.color}/>
            </Link>
        )
    }, [notes]);

    return (
        <>
            <header>
                <h1>WebNotes</h1>
                <Link
                    className="btn"
                    to="/new-note">
                    <span>+</span>
                </Link>
            </header>
            <main>
                {
                    notesComponents
                }
            </main>
        </>
    );

}

export default Home;