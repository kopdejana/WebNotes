function Note(props) {

    return (
        <div className="note" style={{backgroundColor: props.color}}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );

}

export default Note;