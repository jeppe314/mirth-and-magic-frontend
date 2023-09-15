import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

const initialState = {
  character: {},
  characterCreation: {
    name: "",
    race: "",
    attributes: [
      { name: "health", min: 10, value: 0, icon: "GiGlassHeart" },
      { name: "strength", min: 5, value: 0, icon: "GiBiceps" },
      { name: "skill", min: 5, value: 0, icon: "GiSwitchWeapon" },
      { name: "speed", min: 5, value: 0, icon: "GiRunningNinja" },
      { name: "precision", min: 5, value: 0, icon: "GiConvergenceTarget" },
      { name: "precision", min: 5, value: 0, icon: "GiArcheryTarget" },
    ],
  },
};

export const useCharacterStore = create<CharacterStoreType>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        updateName: (name: string) => set((state) => ({ characterCreation: { ...state.characterCreation, name } })),
        updateRace: (race: string) => set((state) => ({ characterCreation: { ...state.characterCreation, race } })),
        updateAttribute: (attribute: string, value: number) =>
          set((state) => ({
            characterCreation: {
              ...state.characterCreation,
              attributes: {
                ...state.characterCreation.attributes,
                [attribute]: value,
              },
            },
          })),
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
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
