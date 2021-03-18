// We will use axios to make server/api calls
import axios from "axios";

const Server = "http://localhost:5000/api";

//

export const TotalOnboard = (callback) => {
  axios
    .get(Server + "/shipment/totalOnboard")
    .then((res) => {
      console.log(res);
      callback(res.data.count);
    })
    .catch((err) => console.error(err));
};

//

export const search = (query, callback) => {
  // Validating whether query is present or not (if empty then stoping next line execution)
  if (!query) return;

  axios
    .post(Server + "/shipment/search", { query })
    .then((res) => {
      callback(res.data);
      //  return res.data;
    })
    .catch((err) => console.error(err));
};
export const find = (query, callback) => {
  // Validating, if any value is present then go to next line
  if (!query.blnumber && !query.status) return;

  // Here deleting the object key if it has a falsy value (like empty value/string, 👉 "" )
  let obj = { ...query };
  Object.keys(obj).forEach((k) => !obj[k] && delete obj[k]);

  axios
    .post(Server + "/shipment/find", { query: obj })
    .then((res) => {
      callback(res.data);
      //  return res.data;
    })
    .catch((err) => console.error(err));
};
export const update = (query, callback) => {
  axios
    .post(Server + "/shipment/update/" + query._id, { query })
    .then((res) => {
      callback(res.data);
      //  return res.data;
    })
    .catch((err) => console.error(err));
};
