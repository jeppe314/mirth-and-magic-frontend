import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";
import route from "../api/character.creation.ts"

const initialState = {
  name: "",
  race: "",
  attributes: {
    health: { min: 5, value: 7, icon: "GiGlassHeart" },
    strength: { min: 5, value: 7, icon: "GiBiceps" },
    skill: { min: 5, value: 7, icon: "GiSwitchWeapon" },
    speed: { min: 5, value: 7, icon: "GiRunningNinja" },
    precision: { min: 5, value: 7, icon: "GiArcheryTarget" },
  },
  distributablePoints: 10,
};

export const useCharacterCreationStore = create(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        updateName: (name: string) => set((state) => ({ name })),
        updateRace: (race: string) => set((state) => ({ race })),
        updateAttribute: (attributeName: string, value: number) => {
          set((state) => {
            const difference = value - state.attributes[attributeName].value;
            if (state.distributablePoints - difference >= 0) {
              return {
                attributes: {
                  ...state.attributes,
                  [attributeName]: {
                    ...state.attributes[attributeName],
                    value: value,
                  },
                },
                distributablePoints: state.distributablePoints - difference,
              };
            }
            return state; // return the current state if the condition is not met
          });
        },
        submitCharacter: async () => {
          const currentState:CharacterCreationStoreType = get()

          const simpleAttributes = Object.keys(currentState.attributes).reduce((acc, key) => {
            acc[key] = currentState.attributes[key].value;
            return acc;
          }, {});
          
          // Construct the character object to submit
          const character = {
            name: currentState.name,
            race: currentState.race,
            attributes: simpleAttributes,
          };
          
          console.log(character);
          await route.submitCharacter(character);  

        },
        reset: () => set(initialState),
      }),
      {
        name: "character-creation-store",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
