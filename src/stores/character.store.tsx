import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const initialState = {
  character: {},
  characterCreation: {
    name: "",
    race: "",
    attributes: {
      health: undefined,
      strength: undefined,
      skill: undefined,
      speed: undefined,
      precision: undefined,
      luck: undefined,
      intelligence: undefined,
    },
  },
};

export const useCharacterStore = create(
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
);
