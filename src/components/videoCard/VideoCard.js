import { useData } from "context/DataContext";
import VideoCardStyles from "./VideoCard.module.css";
import {Clock} from "react-feather";
import { useNavigate } from "react-router-dom";


const VideoCard = (videoDetail) => {
    const {_id : id, title, views, creator, thumbnail} = videoDetail;
    const {state: {watchLater}, dispatch} = useData();
    const navigate = useNavigate();

    const isWatchLater = !!watchLater?.find(({_id}) => id === _id);


    const handleWatchLater = (e) => {
        e.stopPropagation()
        if(isWatchLater){
            dispatch({type: "REMOVE_WATCH_LATER", payload: id})
        }else{
            dispatch({type: "ADD_WATCH_LATER", payload: videoDetail})
        }
        
    }

    return (
        <div className={VideoCardStyles.container} onClick={() => navigate(`/video/${id}`)}>
            <span className={`${VideoCardStyles.icon} ${isWatchLater ? VideoCardStyles.fill : VideoCardStyles.empty}`} onClick={handleWatchLater}>
            <Clock fill={isWatchLater ? "#ff0000" : "#fff" }/>
            </span>
            
            <img src={thumbnail} alt={title} />

            <div className={VideoCardStyles.detailsContainer}>
                <img className={VideoCardStyles.creatorImage} src="https://fastly.picsum.photos/id/788/40/40.jpg?hmac=mVuMnvfw-gwLOSy7aOgK8lDlEbVssTN7D-mOkus5jQk" alt="random" />
                <div className={VideoCardStyles.details}>
                    <h2>{title}</h2>
                    <p>{views} views | {creator} </p>
                </div>
            </div>
            
        </div>
    )
};

export {VideoCard};