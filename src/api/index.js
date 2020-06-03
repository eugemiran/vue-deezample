import ApiService from "./ApiService";

// TODO: add env variable

export default new ApiService(
  "https://cors-anywhere.herokuapp.com/https://api.deezer.com",
  {}
);
