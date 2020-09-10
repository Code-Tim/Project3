import axios from "axios";

export default {
  // Gets all saved characters
  getSavedFightCharacters: function () {
    console.log("inside getSavedFightCharacters");
    const axiosreturnVal = axios.get("/api/wrestlers");
    console.log(axiosreturnVal);
    return axiosreturnVal;
  },
  // Saves an wrestlers to the database
  saveFightCharacters: function (fightCharacterData) {
    return axios.post("/api/fightCharacters", fightCharacterData);
  },
};
