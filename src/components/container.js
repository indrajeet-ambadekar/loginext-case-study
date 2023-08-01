import React, { useCallback } from "react";
import Card from "./card";
import { useSelector } from "react-redux";
import UserActions from "../actions/user";

export default React.memo(({ ...props }) => {
  const getPeopleState = (state) => state.people;
  const store = useSelector((rootState) => getPeopleState(rootState));
  const { deleteUser, likeUser, editUser } = new UserActions();
  const _removeUser = useCallback((userId) => {
    deleteUser(store.users.findIndex((x) => x.id.value === userId));
  }, []);
  const _likeUser = useCallback((userId) => {
    likeUser(store.users.findIndex((x) => x.id.value === userId));
  }, []);
  const _editUser = useCallback((userId) => {
    console.log(
      "_editUser",
      store.users.findIndex((x) => x.id.value === userId)
    );
  }, []);
  return (
    <div className='user-cntnr'>
      {store.users.map((user, index) => (
        <Card
          user={user}
          key={index}
          removeUser={_removeUser}
          likeUser={_likeUser}
          editUser={_editUser}
        />
      ))}
    </div>
  );
});
