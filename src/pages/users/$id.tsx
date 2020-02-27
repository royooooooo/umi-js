import React from 'react';
import { withRouter, router } from 'umi';
import { connect } from 'dva';
import { UserState, UserInformation } from '@/models/user-info';

type UserInfoProps = {
  match: { params?: { id: string } };
  history: any;
  friends: UserInformation[];
};

const UserInfo = (props: UserInfoProps) => {
  const { match, friends, history } = props;

  if (!friends) {
    history.push('users/login');
    return null;
  }
  const id = match.params?.id;
  const userInfo = friends.filter(user => user.id === id);
  return <div>this is {userInfo && userInfo[0].userName}</div>;
};

const mapStateToProps = (state: any) => {
  return {
    friends: state.users.friends,
  };
};

// @ts-ignore-next-line
export default connect(mapStateToProps)(withRouter(UserInfo));
