import { action } from "../helpers/actionCreator";
import { getCall, postCall } from "../helpers/utils";
import { API_URL, API_SUCCESS_CODE, API_C_SUCCESS_CODE } from './../constants';

export const ACTIONS = {
  FETCH_POSTS: "FETCH_POSTS",
  FETCH_ALBUMS: "FETCH_ALBUMS",
  FETCH_USERS: "FETCH_USERS",
  FETCH_TODOS: "FETCH_TODOS",
};

const getPosts = async dispatch => {
  const { response } = await getCall(`${API_URL}posts`);
  if (response != null && response.status === API_SUCCESS_CODE) {
    dispatch(action(ACTIONS.FETCH_POSTS, { posts: response.data, message: 'Posts fetched succesfully', isError: false }))
  } else {
    dispatch(action(ACTIONS.FETCH_POSTS, { posts: [], isError: true, message: "Could't fetch the Posts" }))
  }
}

const getAlbums = async dispatch => {
  const { response } = await getCall(`${API_URL}albums`);

  if (response != null && response.status === API_SUCCESS_CODE) {
    dispatch(action(ACTIONS.FETCH_ALBUMS, { albums: response.data, message: 'Albums fetched succesfully', isError: false }))
  } else {
    dispatch(action(ACTIONS.FETCH_ALBUMS, { albums: [], isError: true, message: "Could't fetch the Albums" }))
  }
}

const getUsers = async dispatch => {
  const { response } = await getCall(`${API_URL}users`);

  if (response != null && response.status === API_SUCCESS_CODE) {
    dispatch(action(ACTIONS.FETCH_USERS, { users: response.data, message: 'Users fetched succesfully', isError: false }))
  } else {
    dispatch(action(ACTIONS.FETCH_USERS, { users: [], isError: true, message: "Could't fetch Users" }))
  }
}

const getTodos = async dispatch => {
  const { response } = await getCall(`${API_URL}todos`);

  if (response != null && response.status === API_SUCCESS_CODE) {
    dispatch(action(ACTIONS.FETCH_TODOS, { todos: response.data, message: 'Todos fetched succesfully', isError: false }))
  } else {
    dispatch(action(ACTIONS.FETCH_TODOS, { todos: [], isError: true, message: "Could't fetch Todos" }))
  }
}

const addPost = async (posts, dispatch) => {
  const reqPayload = {
    title: "foo",
    body: "bar",
    userId: 1
  }
  const { response } = await postCall(`${API_URL}posts`, reqPayload);

  if (response != null && response.status === API_C_SUCCESS_CODE) {
    posts.push(response.data);
    dispatch(action(ACTIONS.FETCH_POSTS, { posts, message: 'Added Succesfully', isError: false }))
  } else {
    dispatch(action(ACTIONS.FETCH_POSTS, { posts, isError: true, message: "Could't able to add the record" }))
  }
}


export {
  getPosts,
  getAlbums,
  getUsers,
  getTodos,
  addPost
}