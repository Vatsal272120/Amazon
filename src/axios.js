import axios from "axios";

const instance = axios.create({
  // api url - cloud fn
  baseURL: "http://localhost:5001/fir-c5f8b/us-central1/api",
});

export default instance;
