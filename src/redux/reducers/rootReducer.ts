import { combineReducers } from "redux";
import tagsReducer from "./tagsReducer";
import notesReducer from "./notesReducer";

const rootReducer = combineReducers({
  tags: tagsReducer,
  notes: notesReducer,
});

export default rootReducer;
