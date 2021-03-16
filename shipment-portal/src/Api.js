import axios from "axios";

export const search = (query, callback) => {
  if (!query) return;

  axios
    .post("http://localhost:5000/api/shipment/search", { query })
    .then((res) => {
      callback(res.data);
      //  return res.data;
    });
};
export const find = (query, callback) => {
  if (!query.blnumber && !query.status) return;

  let obj = { ...query };
  Object.keys(obj).forEach((k) => !obj[k] && delete obj[k]);

  axios
    .post("http://localhost:5000/api/shipment/find", { query: obj })
    .then((res) => {
      callback(res.data);
      //  return res.data;
    });
};
