import jsonPlaceholder from '../apis/jsonAPI';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());

	const posts = getState().posts;

	posts
		.map((post) => post.userId)
		.filter((id, idx) => posts.indexOf(id) !== idx)
		.forEach((userId) => dispatch(fetchUser(userId)));
};

export const fetchPosts = () => async (dispatch) => {
	const response = await jsonPlaceholder.get('/posts');

	dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
	const response = await jsonPlaceholder.get(`/users/${id}`);

	dispatch({ type: 'FETCH_USER', payload: response.data });
};
