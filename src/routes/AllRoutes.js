import { Explore, Home, Playlists, SingleVideo, VideoList, WatchLater } from "pages";
import {Routes, Route} from "react-router-dom";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/explore" element={<Explore/>} />
            <Route path="/playlists" element={<Playlists/>} />
            <Route path="/watchLater" element={<WatchLater/>} />
            <Route path="/videos/:categorySelected" element={<VideoList/>} />
            <Route path="/video/:videoId" element={<SingleVideo/>} />
        </Routes>
    )
};

export default AllRoutes;