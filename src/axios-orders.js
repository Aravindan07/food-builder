import axios from "axios";

const instance = axios.create({
  baseURL: "https://food-builder-437ce.firebaseio.com/"
});

export default instance;
