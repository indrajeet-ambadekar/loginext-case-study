let initialState = {
  users: [],
  loading: false
};
export default function applicationReducer(state = initialState, action) {
  /*eslint no-redeclare: 0*/
  var { type, payload } = action;

  switch (type) {
    case "GET_USERS_BEGIN":
      return { ...state, loading: true };
    case "GET_USERS_SUCCESS":
      return { ...state, loading: false, users: payload };
    case "DELETE_USER":
      state.users.splice(payload, 1);
      return { ...state, loading: false };
    case "LIKE_USER":
      state.users = state.users.map((u, i) => {
        if (i === payload) {
          if (u.isLiked) {
            u.isLiked = false;
          } else {
            u.isLiked = true;
          }
        }
        return u;
      });
      return { ...state, loading: false };
    case "EDIT_USER":
      state.users = state.users.map((u, i) => {
        if (i == payload.index) {
          u = JSON.parse(JSON.stringify(payload.data));
        }
        return u;
      });
      return { ...state, loading: false };
    default:
      return { ...state };
  }
}
