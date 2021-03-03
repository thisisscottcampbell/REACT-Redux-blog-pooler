import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const UserHeader = ({ userId, users }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetchUser(userId);
		setUser(users.find((user) => user.id === userId));
	}, [users]);

	if (user) return <div className="header">{user.name}</div>;
	return null;
};

const mapStateToProps = (state) => {
	return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
