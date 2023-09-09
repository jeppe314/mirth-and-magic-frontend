import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import route from "../api/user";

interface State {
  user: User;
  checkUser: (user: object) => Promise<void>;
}

const initialState = {
  user: {},
  session: {},
};

export const useUserStore = create(
  persist(
    (set) => ({
      ...initialState,
      checkUser: async (authUser) => {
        const { data } = await route.getUser();
        const fetchedUser = data[0];
        if (!fetchedUser) {
          const { data } = await route.addUser(authUser);
          // If the user doesn't exist in the database, we add them
          set({ user: data }); // Assuming data contains the newly added user's details
          return;
        }
        // If the user exists in the database, we update the store with their details
        set({ user: fetchedUser });
      },
      reset: () => set(initialState),
    }),
    {
      name: "user-store", // unique name for the storage key
      storage: createJSONStorage(() => sessionStorage), // using localStorage, but you can also use sessionStorage
    }
  )
);
