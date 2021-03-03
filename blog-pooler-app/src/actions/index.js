import jsonAPI from '../apis/jsonAPI';

export const fetchPosts = () => async (dispatch) => {
	const response = await jsonAPI.get('/posts');

	dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
	const res = await jsonAPI.get(`/users/${id}`);

	dispatch({ type: 'FETCH_USER', payload: res.data });
};
