import { useData } from "context/DataContext";
import { VideoCard } from "components";

const WatchLater = () => {

    const {state: {watchLater}} = useData();
    return (
        <div className="content-container">
            <h1 className="header">WatchLater</h1>
            <ul className="videos-list">
                {watchLater?.map(detail => (
                    <li key={detail._id}>
                        <VideoCard {...detail}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export {WatchLater}