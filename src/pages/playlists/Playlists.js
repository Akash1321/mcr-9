import { AddPlayLists } from "components";
import { useData } from "context/DataContext";
import { useState } from "react";
import {PlusCircle, X} from "react-feather";
import {useNavigate} from "react-router-dom";
import PlaylistsStyle from "./Playlists.module.css";


const Playlists = () => {
    const [showAddToPlaylist, setShowAddToPlaylist] = useState(false);
    const {state: {playlists: data}, dispatch} = useData();
    const navigate = useNavigate();

    const handleDeletePlaylist = (id) =>{
        dispatch({type: "DELETE_PLAYLIST", payload: id});
    }

    const handleMoveToPlaylist = (id, e) => {
        e.stopPropagation();
        navigate(`/playlists/${id}`);
    }

    return (
        <div className="content-container">
            <h1 className="header">Playlists</h1>
            <ul className="videos-list">
                {data?.map((detail) => (
                    <li key={detail.id} className={PlaylistsStyle.lists} onClick={(e) => handleMoveToPlaylist(detail.id, e)}>
                        <X className={PlaylistsStyle.cancel} onClick={() => handleDeletePlaylist(detail.id)} />
                        <div>
                            <img src="https://picsum.photos/300/175" alt="random" />
                        </div>
                        <h2>{detail.title}</h2>
                        <p>{detail.description}</p>
                    </li>
                ))}
                <li onClick={() => setShowAddToPlaylist(true)} className={PlaylistsStyle.add}>
                    <PlusCircle  className={PlaylistsStyle.addIcon}/>
                </li>
            </ul>
            {showAddToPlaylist && <AddPlayLists onCancel={setShowAddToPlaylist} />}
        </div>
    )
}

export {Playlists}