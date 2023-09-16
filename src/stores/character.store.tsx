// character.store.js

import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

const initialCharacterState = {
  character: {},
};

export const useCharacterStore = create(
  devtools(
    persist(
      (set) => ({
        ...initialCharacterState,
        addCharacter: (character) => {
          console.log("addCharacter");
        },
        getCharacter: (character) => {
          console.log("getCharacter");
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
