function NewNote() {

    return (
        <div className="newNote">
            <input type="text" placeholder="Title"/>
            <textarea name="Note" placeholder="Note"></textarea>
            <div>
                <input type="color"/>
                <button>Save</button>
            </div>
        </div>
    );

}

export default NewNote;