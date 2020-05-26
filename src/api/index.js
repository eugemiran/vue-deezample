import ApiService from "./ApiService";

export default new ApiService(process.env.API_URL, {
  accept: "application/json",
  "Content-Type": "application/json"
});
