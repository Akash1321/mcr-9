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
    searchInput: "",
}

export const DataProvider = ({children}) => {
    const [state, dispatch] = useReducer(DataReducer, initialData);

    localStorage.setItem("watch-later", JSON.stringify(state.watchLater));
    localStorage.setItem("videoList", JSON.stringify(state.allVideos));


    const searchedVideos = state.searchInput ? state.allVideos.filter(({title}) => title.toLowerCase().includes(state.searchInput)) : state.allVideos;

    return (
        <DataContext.Provider value={{state, dispatch, searchedVideos}}>
            {children}
        </DataContext.Provider>
    )
}


export const useData = () => useContext(DataContext);