import { Sidebar } from "./components";
import './App.css';
import { Explore, Home, Playlists, WatchLater } from "./pages";
import {Routes, Route} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/explore" element={<Explore/>} />
            <Route path="/playlists" element={<Playlists/>} />
            <Route path="/watchLater" element={<WatchLater/>} />
        </Routes>
    </div>
  );
}

export default App;
