import { axiosWithAuth } from "../helpers/axiosWithAuth";
// import axios from 'axios'

export const fetchBubbles = () => {
  return axiosWithAuth()
    .get("/api/colors")
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err.message);
      return err;
    });
};
