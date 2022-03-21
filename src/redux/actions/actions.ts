import { InitialState } from "../reducers/initialState";

export const ADD_DATA = "ADD_DATA";
export const ADD_TAG = "ADD_TAG";
export const EDIT_NOTE = "EDIT_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

const addData = (payload: InitialState) => {
    return {
        type: ADD_DATA,
        payload
    }
}

const addTag = (payload: any) => {
    return {
        type: ADD_TAG,
        payload
    }
}

const editNote = (payload: any) => {
    return {
        type: EDIT_NOTE,
        payload
    }
}

const deleteNote = (payload: any) => {
    return {
        type: DELETE_NOTE,
        payload
    }
}

export { addData, addTag, editNote, deleteNote };