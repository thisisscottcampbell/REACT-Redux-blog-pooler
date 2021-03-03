import jsonAPI from '../apis/jsonAPI';
import _ from 'lodash';

export const fetchPosts = () => async (dispatch) => {
	const response = await jsonAPI.get('/posts');

	dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => (dispatch) => {
	_fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
	const response = await jsonAPI.get(`/users/${id}`);

	dispatch({ type: 'FETCH_USER', payload: response.data });
});
