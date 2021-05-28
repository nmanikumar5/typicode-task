import { ACTIONS } from "../actions";

export const initialState = {
  posts: [],
  albums: [],
  users: [],
  todos: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    case ACTIONS.FETCH_ALBUMS:
      return {
        ...state,
        albums: action.albums
      };
    case ACTIONS.FETCH_USERS:
      return {
        ...state,
        users: action.users
      };
    case ACTIONS.FETCH_TODOS:
      return {
        ...state,
        todos: action.todos
      };
    case 'Error': {
      return {
        isError: true,
        message: action.message
      }
    }

    default: {
      return state
    }
  }
}

export default dataReducer;
