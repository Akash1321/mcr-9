import { VideoCard } from "components";
import { useData } from "context/DataContext";
import ExportStyles from "./Explore.module.css";

const Explore = () => {

    const {dispatch, searchedVideos} = useData()

    const handleSearchInput = (e) => {
       dispatch({type: "SEARCH_INPUT", payload: e.target.value});
    }

    return (
        <div className="content-container">
            <h1 className="header">Explore</h1>

            <div className={ExportStyles.searchContainer}>
                <input type="text" placeholder="Search videos by title" onChange={handleSearchInput}/>
            </div>

            <ul className="videos-list">
            {searchedVideos?.map(detail => (
                    <li key={detail._id}>
                        <VideoCard {...detail}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export {Explore}