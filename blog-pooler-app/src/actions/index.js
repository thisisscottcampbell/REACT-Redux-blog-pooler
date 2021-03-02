import jsonAPI from '../apis/jsonAPI';

export const fetchPosts = () => async (dispatch) => {
	const response = await jsonAPI.get('/posts');

	dispatch({ type: 'FETCH_POSTS', payload: response.data });
};
