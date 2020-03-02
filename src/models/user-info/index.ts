import { EffectsCommandMap } from "dva";
import { router } from 'umi';
import { loginApi, LoginRequestParams } from '@/pages/users/login/service/api';
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
    id: '',
    userName: '',
    friends: [],
  },

  reducers: {
    save: (state: UserState, { payload }: { payload: UserState }) => {
      console.log(payload);

      return { ...state, ...payload };
    },
  },

  effects: {
    *login({ payload }: { payload: LoginRequestParams }, { call, put }: EffectsCommandMap) {
      const response = yield call(loginApi, payload)
      yield put({ type: 'save', payload: response });
      router.push('/users');
    }
  },
};
