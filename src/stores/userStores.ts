import axios from "axios";
import { types, flow, Instance } from "mobx-state-tree";

export const UserModel = types.model("UserModel", {
  firstname: types.string,
  lastname: types.string,
  username: types.string,
  email: types.string,
});

export const UserStore = types
  .model("UserStore", {
    users: types.array(UserModel),
  })
  .actions((store) => ({
    setUsers(newUsers) {
      store.users = newUsers;
    },
    async fetchUsers() {
      const token = localStorage.getItem("accessToken");
      const xsrfToken = localStorage.getItem("xsrfToken");
      console.log("token", token);
      console.log("xsrfToken", xsrfToken);
      const data = await axios.get("https://api.pote.dev/users/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "x-xsrf-token": `${xsrfToken}`,
        },
      });
      console.log("data", data);
      const newUsers = data.data.map((user) => ({
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
      }));
      store.setUsers(newUsers);
    },
  }));

export const userStore = UserStore.create();

export interface IUser extends Instance<typeof UserStore> {}
