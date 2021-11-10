import { MobXProviderContext } from "mobx-react";
import { useContext } from "react";

import { IStores } from "../stores/MobxStoreProvider";

export function useMobxStores<T extends object = {}>() {
  return useContext<IStores & T>(MobXProviderContext);
}
