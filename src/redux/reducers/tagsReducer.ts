import { ADD_DATA, ADD_TAG } from "../actions/actions";

interface Action {
    type: string;
    payload: any;
}

const initialState = {
    data: []
}

const tagsReducer = (state = initialState, action: Action) => {
     switch(action.type) {
        case ADD_DATA: 
            return {
                ...state,
                data: action.payload.tags
            }
        case ADD_TAG:
            return {
            ...state,
            data: [...state.data, action.payload],
        }
        default: return state;
    }
};

export default tagsReducer;