import {createContext, useContext, useReducer} from "react";
import {videos} from "data/allVideos";
import { categories } from "data/categories";
import { DataReducer } from "reducer/DataReducer";

const DataContext = createContext();

const videosTransformed = videos.map(detail => ({...detail, notes: []}));

const initialData = {
    categories: categories,
    allVideos: JSON.parse(localStorage.getItem("videoList")) || videosTransformed,
    watchLater: JSON.parse(localStorage.getItem("watch-later")) || [],
    playlists: JSON.parse(localStorage.getItem("playlists-data")) || [],
    searchInput: "",
}

export const DataProvider = ({children}) => {
    const [state, dispatch] = useReducer(DataReducer, initialData);

    localStorage.setItem("watch-later", JSON.stringify(state.watchLater));
    localStorage.setItem("videoList", JSON.stringify(state.allVideos));
    localStorage.setItem("playlists-data", JSON.stringify(state.playlists));


    const searchedVideos = state.searchInput ? state.allVideos.filter(({title}) => title.toLowerCase().includes(state.searchInput)) : state.allVideos;


    console.log(state.playlists)
    return (
        <DataContext.Provider value={{state, dispatch, searchedVideos}}>
            {children}
        </DataContext.Provider>
    )
}


export const useData = () => useContext(DataContext);