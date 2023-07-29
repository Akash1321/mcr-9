import {X} from "react-feather";
import NoteStyles from "./Note.module.css";
import { useData } from "context/DataContext";


const Note = ({id, setShowAddNote, setShowEditNote, noteId, editNote}) => {
    const {dispatch, state: {allVideos}} = useData();
    const theNote = allVideos?.find(({_id}) => _id === id)?.notes?.find(({id}) => id === noteId);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const note = form.note.value;


        if(editNote){
            dispatch({type: "EDIT_NOTE", payload: {addTo: id , note: {id: noteId, note}}})
        }else{
            dispatch({type: "ADD_NOTE", payload: {addTo: id , note: {id: new Date().toISOString(), note}}}); 
        }

        if(editNote){
            setShowEditNote(false)
        }else{
            setShowAddNote(false);
        }

        
     }

     const handleCancel = () => {

        if(editNote){
            setShowEditNote(false);
        }else{
            setShowAddNote(false);
        }
        
        
     }
     
    return (
        <div className={NoteStyles.noteContainer}>
            <X onClick={handleCancel} className={NoteStyles.cancel}/>
            <form className={NoteStyles.form} onSubmit={handleFormSubmit}>
            <input type="text" name="note" defaultValue={editNote && theNote?.note} placeholder="New note" />
            {editNote ? <button>Edit Note</button> : <button>Add New Note</button>}
            </form>
            
        </div>
    )
}

export {Note};