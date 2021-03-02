import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

const PostList = (props) => {
	const { fetchPosts, posts } = props;

	const blogList = () => {
		return posts.map((post) => (
			<div className="item" key={post.id}>
				<i className="large middle aligned icon user" />
				<div className="content">
					<div className="description">
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</div>
				</div>
			</div>
		));
	};
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
			<div className="ui relaxed divided list">{blogList()}</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
