import Note from "../Note";
import { Link } from 'react-router-dom';

function Home(props) {

    const notes = props.notes;

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
                    notes.map(
                        note => 
                        <Link key={note.id}  to={"/edit-note/" + note.id}>
                            <Note key={note.id} title={note.title} content={note.content} color={note.color}/>
                        </Link>
                    )
                }
            </main>
        </>
    );

}

export default Home;