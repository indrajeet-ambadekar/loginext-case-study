import { useDispatch } from "react-redux";
import axios from "axios";
export default class UserActions {
  constructor() {}
  getUsers = async () => {
    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array of ids
    let responses = await Promise.all(
      ids.map(async (id) => {
        return await axios({
          method: "GET",
          url: "https://randomuser.me/api/",
          dataType: "json"
        }); // Send request for each id
      })
    );
    responses = responses.map((x) => x.data.results[0]);
    return responses;
  };
}
