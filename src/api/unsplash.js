import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 1c741f89166a3295ddc690c308c9957ad668beb66643625579c3785f77ce38d6 "
  }
});
