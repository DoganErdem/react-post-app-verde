import { combineReducers } from "redux";
import { StorePostReducer} from './reducers/StorePostReducer';

const Reducer = combineReducers({
    posts: StorePostReducer,
})

export default Reducer;