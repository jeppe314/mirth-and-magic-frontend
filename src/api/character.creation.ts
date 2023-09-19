import axiosInstance from "../interceptors/interceptors";
interface submitCharacterPayload {
  character: CharacterCreationType,
  userId: number
}
const submitCharacter = (payload: submitCharacterPayload) => axiosInstance.post("/character", payload);

export default {
  submitCharacter,
};
