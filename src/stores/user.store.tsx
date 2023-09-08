import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { mountStoreDevtool } from "simple-zustand-devtools";
import route from "../api/user.js";

interface User {
  id?: string;
  username?: string;
  email?: string;
  sub?: string;
  role?: string;
}

interface State {
  user: User;
  checkUser: (token: string) => Promise<void>;
}

export const useUserStore = create<State>((set) => ({
  user: {},
  session: {},
  checkUser: async (token: string) => {
    console.log("checking and doing nothing hehe");
    const res = await route.getUser();
    console.log("🚀 ~ file: user.store.tsx:24 ~ checkUser: ~ res:", res);
  },

  //   addStr: () => set((state) => ({ strength: state.strength + 1 })),
}));

mountStoreDevtool("Store", useUserStore);
