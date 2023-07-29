import { Explore, Home, Playlists, WatchLater } from "pages";
import {Routes, Route} from "react-router-dom";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/explore" element={<Explore/>} />
            <Route path="/playlists" element={<Playlists/>} />
            <Route path="/watchLater" element={<WatchLater/>} />
        </Routes>
    )
};

export default AllRoutes;