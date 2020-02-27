export type UserInformation = {
  id: string;
  userName: string;
}

export type UserState = UserInformation & {
  friends: UserInformation[];
};

export default {
  namespace: 'users',
  state: {
    userName: '',
  },
  reducers: {
    save: (state: UserState, { payload }: { payload: UserState }) => {
      return { ...state, ...payload };
    },
  },
};
