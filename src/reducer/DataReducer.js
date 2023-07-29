const DataReducer = (state, action) => {
    switch(action.type){
        case "ADD_WATCH_LATER":
            return {...state, watchLater: [...state.watchLater, action.payload]}

        case "REMOVE_WATCH_LATER": 
           return {...state, watchLater: state.watchLater.filter(({_id}) => _id !== action.payload)}

        case "SEARCH_INPUT":
            return {...state, searchInput: action.payload.toLowerCase()};

        case "ADD_NOTE":
            const {addTo, note} = action.payload;
            return {...state, allVideos: state.allVideos.map(detail => detail._id === addTo ? {...detail, notes: [...detail.notes, note]} : detail) };


        case "EDIT_NOTE":
            const {addTo: add, note: editedNote} = action.payload;
            return {...state, allVideos: state.allVideos.map(detail => detail._id === add ? {...detail, notes: detail.notes.map(note => note.id === editedNote.id ? editedNote : note)} : detail) };

        case "DELETE_NOTE": 
          const {videoId, noteId} = action.payload;
          return {...state, allVideos: state.allVideos.map(detail => detail._id === videoId ? {...detail, notes: detail.notes.filter(note => note.id !== noteId)} : detail ) };

        default:
            return state
    }
};

export {DataReducer};