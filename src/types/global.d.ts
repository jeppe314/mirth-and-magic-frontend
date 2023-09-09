interface User {
  id?: string;
  username?: string;
  email?: string;
  sub?: string;
  role?: string;
  picture?: string;
}

//--------------------------------// STATE TYPES //----------------------------//

interface UserStoreType {
  user: User;
  checkUser: (user: object) => Promise<void>;
  setUsername: (user: object) => Promise<void>;
  reset: () => Promise<void>;
}

//-----------------------// OTHER TYPES //-----------------------------//
