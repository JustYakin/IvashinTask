import { ADD_DATA, EDIT_NOTE, DELETE_NOTE } from "../actions/actions";

interface Action {
    type: string;
    payload: any;
}

const initialState = {
    data: []
}

const removeNote = (state: any, action: Action) => {
    return [...state.data].filter(item => item !== action.payload);
}

const notesReducer = (state = initialState, action: Action) => {
     switch(action.type) {
        case ADD_DATA: 
        return {
            ...state,
            data: action.payload.notes
        }
        case EDIT_NOTE:
            return {
            ...state,
            data: [...state.data, action.payload]
        }
        case DELETE_NOTE:
            return {
                ...state,
                data: removeNote(state, action)
            }
        default: return state;
    }
};

export default notesReducer;