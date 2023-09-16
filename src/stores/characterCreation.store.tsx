// characterCreation.store.js

import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

const initialState = {
  name: '',
  race: '',
  attributes: {
    health: { min: 5, value: 7, icon: 'GiGlassHeart' },
    strength: { min: 5, value: 7, icon: 'GiBiceps' },
    skill: { min: 5, value: 7, icon: 'GiSwitchWeapon' },
    speed: { min: 5, value: 7, icon: 'GiRunningNinja' },
    precision: { min: 5, value: 7, icon: 'GiArcheryTarget' },
  },
  distributablePoints: 10,
};

const useCharacterCreationStore = create<CharacterCreationStoreType>()(
  devtools(
    persist(
      (set) => ({
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
                    value,
                  },
                },
                distributablePoints: state.distributablePoints - difference,
              };
            }
            return state; // return the current state if the condition is not met
          });
        },
        reset: () => set(initialState),
      }),
      {
        name: 'character-creation-store',
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);

export default useCharacterCreationStore;
