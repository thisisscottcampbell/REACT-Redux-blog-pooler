import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

const PostList = (props) => {
	const { fetchPostsAndUsers, posts } = props;
	const [blogList, setBlogList] = useState([]);

	const renderBlogs = () => {
		return posts.map((post) => (
			<div className="item" key={post.id}>
				<i className="large middle aligned icon user" />
				<div className="content">
					<div className="description">
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</div>
					<UserHeader userId={post.userId} />
				</div>
			</div>
		));
	};
	//cdm
	useEffect(() => {
		fetchPostsAndUsers();
	}, []);

	//if we have updated state posts data:
	useEffect(() => {
		setBlogList(renderBlogs);
	}, [posts]);

	return (
		<div>
			<h4>i am PostList</h4>
			<div className="ui relaxed divided list">{blogList}</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
