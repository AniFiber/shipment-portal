import axios from "axios";

export const search = (query) => {
  if (!query) return;

  axios
    .post("http://localhost:5000/api/shipment/search", { query })
    .then((res) => {
      console.log({ res });
      return res.data;
    });
};
