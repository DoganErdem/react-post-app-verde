import {POST, SELECTED_POST, UPDATE_POST, DELETE_POST, ADD_POST} from './ActionTypes'
export const StorePostAction =(posts)=>{
    return {
        type: POST, 
        payload: posts
    }
}

export const SelectedPost = (selectedPost) => {
    return {
        type: SELECTED_POST,
        payload: selectedPost
    }
}

export const UpdatePost = (post) => {
    return {
        type: UPDATE_POST,
        payload: post
    }
}
export const AddPost = (post) => {
    return {
        type: ADD_POST,
        payload: post
    }
}
export const DeletePost = (id) => {
    return {
        type: DELETE_POST,
        payload: id
    }
}
