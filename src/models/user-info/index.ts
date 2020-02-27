export type UserState = {
  userName: string;
};

export default {
  namespace: 'users',
  state: {
    userName: '',
  },
  reducers: {
    save: (state: UserState, { payload }: { payload: string }) => {
      console.log(payload);
      
      return { ...state, userName: payload };
    },
  },
};
