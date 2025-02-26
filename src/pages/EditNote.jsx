import { Link } from "react-router-dom";

function EditNote() {

    return (
        <div className="editNote">
            <input type="text" placeholder="Title"/>
            <textarea name="Note" placeholder="Note"></textarea>
            <div>
                <input type="color"/>
                <Link to="/">
                    <button>Save</button>
                </Link>
            </div>
        </div>
    );

}

export default EditNote;