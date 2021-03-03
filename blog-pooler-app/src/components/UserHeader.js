import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const UserHeader = ({ user, fetchUser, userId }) => {
	//const user = users.find((user) => user.id === userId);

	useEffect(() => {
		fetchUser(userId);
	}, []);

	if (!user) return null;
	else return <div className="header">{user.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
	return { user: state.users.find((user) => user.id === ownProps.userId) };
	//return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
