import { types, flow } from "mobx-state-tree";

export const UserStore = types
  .model("UserStore", {
    email: types.string,
    username: types.string,
    token: types.frozen({
      key: types.string,
    }),
  })
  .views((self) => {
    const views = {
      get token() {
        return self.token;
      },
      get username() {
        return self.username;
      },
      get email() {
        return self.email;
      },
    };
  });
