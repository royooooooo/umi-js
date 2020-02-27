import React from 'react';
import { UserState, UserInformation } from '@/models/user-info';
import { connect } from 'dva';
import { router } from 'umi';
import { Form, Table } from 'antd';

type WelcomePageProps = { userName: string; friends: UserInformation[] };

const WelcomePage = ({ userName, friends }: WelcomePageProps) => {
  if (!userName) {
    router.push('/users/login');
  }

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'name',
      dataIndex: 'userName',
      key: 'name',
    },
  ];

  const rowClickHandler = (row: UserInformation) => {
    router.push(`/users/${row.id}`);
  };

  return (
    <div>
      hello user:{userName}, your friends:
      <Table dataSource={friends} columns={columns} onRowClick={rowClickHandler} />
    </div>
  );
};

const mapStateToProps = ({ users }: { users: UserState }) => ({
  userName: users?.userName,
  friends: users?.friends,
});

export default connect(mapStateToProps)(WelcomePage);
