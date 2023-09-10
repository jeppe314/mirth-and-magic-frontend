import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
// import route from "../api/character";

const initialState = {
  character: {},
};

export const useCharacterStore = create(
  persist(
    (set) => ({
      ...initialState,
      addCharacter: (character: CharacterType) => {
        console.log("addCharacter");
      },
      getCharacter: (character: CharacterType) => {
        console.log("getCharacter");
      },

      reset: () => set(initialState),
    }),
    {
      name: "character-store",
      storage: createJSONStorage(() => sessionStorage), //using sessionstorage, not sure if should use session or local or other?
    }
  )
);
