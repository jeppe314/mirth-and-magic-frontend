import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

const initialState = {
  character: {},
  characterCreation: {
    name: "",
    race: "",
    attributes: [
      { name: "health", value: 0, icon: "GiGlassHeart" },
      { name: "strength", value: 0, icon: "GiBiceps" },
      { name: "skill", value: 0, icon: "GiSwitchWeapon" },
      { name: "speed", value: 0, icon: "GiRunningNinja" },
      { name: "precision", value: 0, icon: "GiConvergenceTarget" },
      { name: "precision", value: 0, icon: "GiArcheryTarget" },
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
