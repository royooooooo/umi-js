import React from 'react';
import { UserState } from '@/models/user-info';
import { connect } from 'dva';

const WelcomePage = ({ userName }: { userName: string }) => {
  return <div>hello user:{userName}</div>;
};

const mapStateToProps = ({ users }: { users: UserState }) => ({
  userName: users?.userName,
});

export default connect(mapStateToProps)(WelcomePage);
