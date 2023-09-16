import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import route from '../api/user.ts';

const initialState = {
  user: {},
  session: {},
};

const useUserStore = create<UserStoreType>()(
  persist(
    (set) => ({
      ...initialState,
      checkUser: async (authUser) => {
        const { data } = await route.getUser();
        const fetchedUser = data[0];
        if (!fetchedUser) {
          const { data: addUserData } = await route.addUser(authUser);
          // If the user doesn't exist in the database, we add them
          set({ user: addUserData }); // Assuming data contains the newly added user's details
          return;
        }
        // If the user exists in the database, we update the store with their details
        set({ user: fetchedUser });
      },
      setUsername: async (sub: string, username: string) => {
        const payload = { username, sub };
        try {
          await route.setUsername(payload);
          set((state: UserStoreType) => ({ user: { ...state.user, username } }));
        } catch (error) {
          console.error(error);
        }
      },
      reset: () => set(initialState),
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => sessionStorage), //using sessionstorage, not sure if should use session or local or other?
    },
  ),
);

export default useUserStore;
