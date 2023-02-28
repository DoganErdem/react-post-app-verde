import {POST, SELECTED_POST, UPDATE_POST, ADD_POST, DELETE_POST} from "../actions/ActionTypes";

const initialState = {
    posts: [],
    selectedPost: {},
}

export const StorePostReducer = (state = initialState, action) => {

    console.log("asd", action)
    switch(action.type){
        case POST:
            return {...state, posts:[...action.payload]};

        case SELECTED_POST:
            return {...state, selectedPost:action.payload};
        case UPDATE_POST:
            const oldPost = state.posts.filter(item => item.id !== action.payload.id);
            return {...state, posts:[...oldPost, action.payload ]};
        case ADD_POST:
            let post = action.payload;
            post = {...post, id: state.posts.length + 1}
            return {...state, posts:[...state.posts, post ]};
        case DELETE_POST:
            const newPost = state.posts.filter(item => item.id !== action.payload);
            return {...state, posts:[...newPost]};
        default: return state;
    }
}
