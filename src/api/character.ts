import axiosInstance from "../interceptors/interceptors";

const getCharacterByUserId = (userId:number) => axiosInstance.get(`/character/${userId}`);

export default {
    getCharacterByUserId
};
