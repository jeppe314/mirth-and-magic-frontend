interface User {
  id?: string;
  username?: string;
  email?: string;
  sub?: string;
  role?: string;
  picture?: string;
}

interface CharacterType {
  id?: string;
  name?: string;
  race?: string;
  attributes?: AttributesType;
  inventory?: Array;
}

interface AttributesType {
  health?: number;
  strength?: number;
  skill?: number;
  speed?: number;
  precision?: number;
  luck?: number;
  intelligence?: number;
}

//--------------------------------// STATE TYPES //----------------------------//

interface UserStoreType {
  user: User;
  checkUser: (user: object) => Promise<void>;
  setUsername: (user: object) => Promise<void>;
  reset: () => Promise<void>;
}

//-----------------------// OTHER TYPES //-----------------------------//
