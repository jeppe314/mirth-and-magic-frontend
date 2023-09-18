import axiosInstance from "../interceptors/interceptors";
const submitCharacter = (character: CharacterCreationType) => axiosInstance.post("/character", character);

export default {
  submitCharacter,
};
