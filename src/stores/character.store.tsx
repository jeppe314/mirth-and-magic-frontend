// character.store.js

import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";
import route from "../api/character";


const initialCharacterState = {
  character: {},
};

export const useCharacterStore = create(
  devtools(
    persist(
      (set, get) => ({
        ...initialCharacterState,
        getCharacterByUserId: async (userId:number) => {
          const {data} = await route.getCharacterByUserId(userId)
          set({character: data})
        },
        reset: () => set(initialCharacterState),
      }),
      {
        name: "character-store",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
