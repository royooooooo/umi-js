type UserState = {
  userName: string;
};

export default {
  namespace: 'userInformation',
  state: {
    userName: '',
  },
  reducers: {
    save: (state: UserState, { payload }: { payload: string }) => {
      return { ...state, userName: payload };
    },
  },
};
