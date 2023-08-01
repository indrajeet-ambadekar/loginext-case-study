import { useDispatch } from "react-redux";
import axios from "axios";
export default class UserActions {
  constructor() {
    this.dispatch = useDispatch();
  }
  getUsers = async () => {
    this.dispatch({ type: "GET_USERS_BEGIN" });
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
    this.dispatch({ type: "GET_USERS_SUCCESS", payload: responses });
    return responses;
  };
  deleteUser = (index) => {
    this.dispatch({ type: "DELETE_USER", payload: index });
  };
  likeUser = (index) => {
    this.dispatch({ type: "LIKE_USER", payload: index });
  };
  editUser = (index, data) => {
    this.dispatch({ type: "EDIT_USER", payload: { index, data } });
    return Promise.resolve();
  };
}
