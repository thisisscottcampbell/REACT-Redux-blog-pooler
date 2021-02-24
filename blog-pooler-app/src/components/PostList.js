import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

const PostList = (props) => {
	const { fetchPosts } = props;

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div>
			<h4>i am PostList</h4>
		</div>
	);
};

export default connect(null, { fetchPosts })(PostList);
