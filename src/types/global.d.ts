interface User {
  id?: string;
  username?: string;
  email?: string;
  sub?: string;
  role?: string;
  picture?: string;
}

interface AttributesType {
  health?: number;
  strength?: number;
  skill?: number;
  speed?: number;
  precision?: number;
}

interface CharacterType {
  id?: string;
  name?: string;
  race?: string;
  attributes?: AttributesType;
  inventory?: Array;
}

interface AttributeDetail {
  min: number;
  value: number;
  icon: string;
}

interface CharacterCreationType {
  name: string;
  race: string;
  attributes: AttributesType;
}

type Race = 'dwarf' | 'elf' | 'human';

// --------------------------------// STATE TYPES //---------------------------- //

interface UserStoreType {
  user: User;
  checkUser: (user: object) => Promise<void>;
  setUsername: (user: object, name: string) => Promise<void>;
  reset: () => Promise<void>;
}
interface CharacterStoreType {
  character: CharacterType;
  updateAttribute: (attribute: string, value: number) => void;
  addCharacter: (race: string) => Promise<void>;
  getCharacter: (race: string) => Promise<void>;
  reset: () => Promise<void>;
}

interface CharacterCreationAttributes {
  health: AttributeDetail;
  strength: AttributeDetail;
  skill: AttributeDetail;
  speed: AttributeDetail;
  precision: AttributeDetail;
}

type CharacterCreationStoreType = {
  name: string;
  race: string;
  attributes: CharacterCreationAttributes;
  distributablePoints: number;
  updateName: (name: string) => void;
  updateRace: (race: string) => void;
  updateAttribute: (attributeName: string, value: number) => void;
  reset: () => void;
};

// -----------------------// OTHER TYPES //----------------------------- //
