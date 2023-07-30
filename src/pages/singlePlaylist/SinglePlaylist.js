import { VideoCard } from "components";
import { useData } from "context/DataContext";
import {useParams} from "react-router-dom";
import  SinglePlaylistStyles  from "./SinglePlaylist.module.css";

const SinglePlaylist = () => {

    const {playlistId} = useParams();
    const {state: {playlists}, dispatch} = useData();

    const showPlaylist = playlists?.find(({id}) => playlistId === id);

    const handleRemoveFromPlaylist = (id) => {
        dispatch({type: "REMOVE_VIDEO_FROM_LIST", payload: {id: playlistId, vidId: id}});
    }

    return (
       <div className="content-container">
        <h1 className="header">{showPlaylist?.title}</h1>
        <ul className="videos-list">
                {showPlaylist?.videos?.map(detail => (
                    <li key={detail._id}>
                        <VideoCard {...detail}/>
                        <p className={SinglePlaylistStyles.remove} onClick={() => handleRemoveFromPlaylist(detail._id)}>Remove</p>
                    </li>
                ))}
            </ul>
       </div>
    )
};

export {SinglePlaylist};

