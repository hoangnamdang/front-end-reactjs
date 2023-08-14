import axios from "../axios";

const getDoctorHightligh = async () => {
  return await axios.get("/get-data-doctor-home");
};

export { getDoctorHightligh };
