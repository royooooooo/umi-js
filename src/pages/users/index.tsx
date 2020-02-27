import React from 'react';
import { UserState } from '@/models/user-info';
import { connect } from 'dva';
import { router } from 'umi';

const WelcomePage = ({ userName }: { userName: string }) => {
  if (!userName) {
    router.push("/users/login");
  }
  return <div>hello user:{userName}</div>;
};

const mapStateToProps = ({ users }: { users: UserState }) => ({
  userName: users?.userName,
});

export default connect(mapStateToProps)(WelcomePage);
