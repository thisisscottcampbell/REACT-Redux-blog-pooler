import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

const PostList = (props) => {
	const { fetchPosts, posts } = props;

	//cdm
	useEffect(() => {
		fetchPosts();
	}, []);

	//if we have updated state posts data:
	useEffect(() => {
		console.log(posts);
	}, [posts]);

	return (
		<div>
			<h4>i am PostList</h4>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
