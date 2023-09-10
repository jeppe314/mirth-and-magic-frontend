import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

const initialState = {
  character: {},
  characterCreation: {
    name: "",
    race: "",
    attributes: {
      health: 0,
      strength: 0,
      skill: 0,
      speed: 0,
      precision: 0,
      luck: 0,
      intelligence: 0,
    },
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
