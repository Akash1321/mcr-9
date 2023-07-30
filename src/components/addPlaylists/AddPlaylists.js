import { useData } from "context/DataContext";
import { X } from "react-feather";
import AddPlayListsStyle from "./AddPlaylists.module.css";

const AddPlayLists = ({ onCancel, addVideos, video}) => { 
  const { state: { playlists }, dispatch } = useData();


  const handleCancel = () => {
    onCancel(false);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;

    dispatch({type: "ADD_NEW_PLAYLIST", payload: {id: new Date().toISOString(), title, description, videos: []}});

    form.reset();
  }

  const handleDeletePlaylist = (id) => {
    dispatch({type: "DELETE_PLAYLIST", payload: id})
  }

  const handleAddToList = (id, e) => {
    e.stopPropagation();

    if(addVideos){
        dispatch({type: "ADD_VIDEO_TO_PLAYLIST", payload: {id, video}});
        onCancel(false);
    }
  }

  return (
    <div className={AddPlayListsStyle.container}>
      <X className={AddPlayListsStyle.cancel} onClick={handleCancel} />
      <h3 className={AddPlayListsStyle.heading}>Add To Playlist</h3>
      <form className={AddPlayListsStyle.form} onSubmit={handleFormSubmit}>
        <input type="text" name="title" placeholder="Enter title of your playlist" />
        <input type="text" name="description" placeholder="Add Description" />
        <button>Create New Playlist</button>
      </form>

      <ul className={AddPlayListsStyle.list}>
        {playlists?.map(({ id, title }) => (
          <li key={id} onClick={(e) => handleAddToList(id, e)}>
            {title}
            <X onClick={() => handleDeletePlaylist(id)}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { AddPlayLists };