import mockjs from "mockjs";

export default {
  'POST /api/users': mockjs.mock({
      userName: "@name"
  })
};
