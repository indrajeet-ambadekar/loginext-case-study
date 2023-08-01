import React, { useCallback, useState } from "react";
import Card from "./card";
import { useSelector } from "react-redux";
import UserActions from "../actions/user";
import { Column, Dialog, Text, InputField, Button } from "elysium-cloud-ui";

export default React.memo(({ ...props }) => {
  const getPeopleState = (state) => state.people;
  const store = useSelector((rootState) => getPeopleState(rootState));
  const [targetUser, setTargetUser] = useState(null);
  const [targetUserId, setTargetUserId] = useState(null);
  const [editModal, toggleEditModal] = useState(false);
  const { deleteUser, likeUser, editUser } = new UserActions();
  const _removeUser = (email) => {
    deleteUser(store.users.findIndex((i) => i.email == email));
  };
  const _likeUser = (email) => {
    likeUser(store.users.findIndex((x) => x.email == email));
  };
  const _editUser = (email) => {
    let index = store.users.findIndex((x) => x.email == email);
    setTargetUserId(index);
    setTargetUser(JSON.parse(JSON.stringify(store.users[index])));
    toggleEditModal(true);
  };
  const _hideModal = () => {
    toggleEditModal(false);
    setTargetUser(null);
    setTargetUserId(null);
  };
  const _updateUser = (val, label, subLabel) => {
    let _user = Object.assign({}, { ...targetUser });
    if (label) {
      if (subLabel) {
        _user[label][subLabel] = val;
      } else {
        _user[label] = val;
      }
    }
    setTargetUser({ ..._user });
  };
  const _saveUser = () => {
    editUser(targetUserId, targetUser).then((x) => {
      _hideModal();
    });
  };

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
      {editModal && targetUser && (
        <Dialog id='editModal' open={editModal} hide={_hideModal} header={true}>
          <div className='dialog-title'>
            <Text type='h5'>Edit User Information</Text>
          </div>
          <div className='dialog-body'>
            <div className='row'>
              <Column md={12}>
                <InputField
                  className='form-input'
                  label='First Name'
                  type='text'
                  value={targetUser?.name?.first}
                  onChange={(val) => _updateUser(val, "name", "first")}
                />
              </Column>
            </div>
            <div className='row'>
              <Column md={12}>
                <InputField
                  className='form-input'
                  type='text'
                  label='Last Name'
                  value={targetUser?.name?.last}
                  onChange={(val) => _updateUser(val, "name", "last")}
                />
              </Column>
            </div>
            <div className='row'>
              <Column md={12}>
                <InputField
                  className='form-input'
                  label='Email'
                  type='text'
                  value={targetUser?.email}
                  onChange={(val) => _updateUser(val, "email")}
                />
              </Column>
            </div>
            <div className='row'>
              <Column md={12}>
                <InputField
                  className='form-input'
                  type='text'
                  label='Phone'
                  value={targetUser?.cell}
                  onChange={(val) => _updateUser(val, "cell")}
                />
              </Column>
            </div>
            <div className='row'>
              <Column md={12}>
                <InputField
                  className='form-input'
                  type='text'
                  label='Website'
                  value={targetUser?.website || ""}
                  onChange={(val) => _updateUser(val, "website")}
                />
              </Column>
            </div>
          </div>
          <div className='dialog-footer'>
            <Button
              type='text'
              onClick={() => _hideModal()}
              className='dismiss-dialog'
            >
              Dismiss
            </Button>
            <Button
              type='text'
              onClick={() => _saveUser()}
              className='submit-btn'
            >
              Ok
            </Button>
          </div>
        </Dialog>
      )}
    </div>
  );
});
