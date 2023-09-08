import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface User {
  id?: string;
  username?: string;
  email?: string;
  sub?: string;
  role?: string;
}

interface State {
  user: User;
  checkUser: (sub: string) => Promise<void>;
}

export const useUserStore = create<State>((set) => ({
  user: {},
  session: {},
  checkUser: async (sub: string) => {},

  //   addStr: () => set((state) => ({ strength: state.strength + 1 })),
}));

mountStoreDevtool("Store", useUserStore);
