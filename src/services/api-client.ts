import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7f0ecdafecd348eb9079e5dfe368a2a4",
  },
});
