import jsonAPI from '../apis/jsonAPI';

export const fetchPosts = async () => {
	const response = await jsonAPI.get('/posts');

	return {
		type: 'FETCH_POSTS',
		payload: response,
	};
};
