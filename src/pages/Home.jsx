import Note from "../Note";
import { Link } from 'react-router-dom';

function Home() {

    const notes = [
        {
            id: 1,
            title: "First",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laborum nemo autem, a aliquam id reprehenderit officiis. Reiciendis molestiae nemo consequatur sapiente sed repellat minus officia dolorum fugit? Modi, vel?",
            color: "pink"
        },
        {
            id: 2,
            title: "Second",
            content: "Lorem ipsum dolor sit amet",
            color: "gray"
        },
        {
            id: 3,
            title: "third jajslkajskla hdjsahjds",
            content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
            color: "blue"
        },
        {
            id: 4,
            title: "Fourth",
            content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
            color: "blue"
        },
    ];

    const notesComponents = notes.map(
        note => 
        <Link to={"/edit-note/" + note.id}>
            <Note title={note.title} content={note.content} color={note.color}/>
        </Link>
    )

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
                {notesComponents}
            </main>
        </>
    );

}

export default Home;