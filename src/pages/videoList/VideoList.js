import {useParams} from "react-router-dom";
import { useData } from "context/DataContext";
import { VideoCard } from "components";

const VideoList = () => {
    const {categorySelected} = useParams();
    const {state: {allVideos}} = useData();

    const showVideos = allVideos?.filter(({category}) => category === categorySelected)


    return (
        <div className="content-container">
            <h1 className="header">{categorySelected}</h1>
            <ul className="videos-list">
                {showVideos?.map(detail => (
                    <li key={detail._id}>
                        <VideoCard {...detail}/>
                    </li>
                ))}
            </ul>
        </div>
        
    )
}

export {VideoList};