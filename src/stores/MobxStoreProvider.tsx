import { Provider } from "mobx-react";
import { ReactNode } from "react";

import { IUser, userStore } from "./userStores";

export interface IProps {
  children: ReactNode;
}

export const stores = {
  userStore,
};

export interface IStores {
  userStore: IUser;
}

export const MobxStoreProvider = ({ children }: IProps) => {
  return <Provider {...stores}>{children}</Provider>;
};
