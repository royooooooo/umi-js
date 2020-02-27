import mockjs from 'mockjs';

export default {
  'POST /api/users': mockjs.mock({
    userName: '@name',
    id: '@id',
    'friends|5-10': [{ id: '@id', userName: '@name' }],
  }),
};
