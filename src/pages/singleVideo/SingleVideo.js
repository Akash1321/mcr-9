import { useData } from "context/DataContext";
import { Clock, Edit, List, Edit2, Trash2 } from "react-feather";
import { useParams } from "react-router-dom";
import SingleVideoStyles from "./SingleVideo.module.css";
import { useState } from "react";
import { Note } from "components";

const SingleVideo = () => {
    
  const [showNAddNote, setShowAddNote] = useState(false);
  const [showEditNote, setShowEditNote] = useState(false);
  const { videoId } = useParams();
  const {
    state: { allVideos, watchLater }, dispatch
  } = useData();

  const showVideo = allVideos?.find(({ _id }) => _id === Number(videoId));
  const isWatchLater = !!watchLater?.find(({_id}) => Number(videoId) === _id);

  const handleWatchLater = (e) => {
    e.stopPropagation()
    if(isWatchLater){
        dispatch({type: "REMOVE_WATCH_LATER", payload: Number(videoId)})
    }else{
        dispatch({type: "ADD_WATCH_LATER", payload: showVideo})
    }
    
}

const handleDeleteNote = () => {

}

  return (
    <div className="content-container-single">
        <div className={SingleVideoStyles.content}>
        <iframe
        width="580"
        height="315"
        src={showVideo?.src}
        title={showVideo?.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className={SingleVideoStyles.info}>

        <div className={SingleVideoStyles.detail}>
        <img src="https://fastly.picsum.photos/id/788/40/40.jpg?hmac=mVuMnvfw-gwLOSy7aOgK8lDlEbVssTN7D-mOkus5jQk" alt={showVideo?.creator} className={SingleVideoStyles.userImage}/>
        <h1>{showVideo?.title}</h1>
        </div>
        

        <div className={SingleVideoStyles.interaction}>
            <Clock fill={isWatchLater ? "black" : "white"} color={isWatchLater ? "white" : "black"} className={SingleVideoStyles.icons} onClick={handleWatchLater}/>
            <List className={SingleVideoStyles.icons} />
            <Edit className={SingleVideoStyles.icons} onClick={() => setShowAddNote(true)}/>
            
            {showNAddNote && <Note setShowAddNote={setShowAddNote} id={showVideo?._id}/>}
        </div>
      </div>
        </div>

        <div className={SingleVideoStyles.notesContainer}>
            <h2>My Notes</h2>
            <ul>
                {showVideo?.notes.map(({id, note}) => (
                    <li key={id}>
                        <p>{note}</p>
                        <div className={SingleVideoStyles.notesInteract}>
                            <Edit2 onClick={() => setShowEditNote(true)}/>
                            <Trash2 onClick={() => handleDeleteNote(id)}/>

                            {showEditNote && <Note id={showVideo?._id} setShowEditNote={setShowEditNote} noteId={id} editNote/>}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
      
    </div>
  );
};

export { SingleVideo };
