import {createContext, useContext, useReducer} from "react";
import {videos} from "data/allVideos";
import { categories } from "data/categories";
import { DataReducer } from "reducer/DataReducer";

const DataContext = createContext();

const initialData = {
    categories: categories,
    allVideos: videos
}

export const DataProvider = ({children}) => {
    const [state, dispatch] = useReducer(DataReducer, initialData);

    return (
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}


export const useData = () => useContext(DataContext);