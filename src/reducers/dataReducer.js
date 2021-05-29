import { ACTIONS } from "../actions";

export const initialState = {
  posts: [],
  albums: [],
  users: [],
  todos: [],
  isError: false,
  message: ""
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_POSTS:
      // return {
      //   ...state,
      //   posts: action.posts,
      //   message: action.message,
      //   isError: action.isError
      // }
      return Object.assign({
        ...state,
        posts: action.posts,
        message: action.message,
        isError: action.isError
      });
    case ACTIONS.FETCH_ALBUMS:
      // return {
      //   ...state,
      //   albums: action.albums,
      //   message: action.message,
      //   isError: action.isError
      // };
      return Object.assign({
        ...state,
        albums: action.albums,
        message: action.message,
        isError: action.isError
      });
    case ACTIONS.FETCH_USERS:
      return {
        ...state,
        users: action.users,
        message: action.message,
        isError: action.isError
      };
    case ACTIONS.FETCH_TODOS:
      return {
        ...state,
        todos: action.todos,
        message: action.message,
        isError: action.isError
      };
    default: {
      return state
    }
  }
}

export default dataReducer;
