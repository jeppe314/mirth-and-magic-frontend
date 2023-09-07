import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface State {
  character: Object;
}

export const useCharacterStore = create<State>((set) => ({
  character: {},
  //   addStr: () => set((state) => ({ strength: state.strength + 1 })),
}));

mountStoreDevtool("Store", useCharacterStore);
