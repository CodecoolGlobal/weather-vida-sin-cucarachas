import axios from "axios";

export const getCatFact = ({ catFact, setCatFact }) => {
  axios
    .get("https://catfact.ninja/fact?max_length=125")
    .then((res) => setCatFact(res.data.fact));
  console.log(catFact);
};
