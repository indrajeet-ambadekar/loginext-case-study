import React, { useContext, useState } from "react";
import Card from "./card";
import { Column, Dialog, Text, InputField, Button } from "elysium-cloud-ui";
import { AppContext } from "../context";
export default React.memo(({ ...props }) => {
  const { users, setUsers } = useContext(AppContext);
  const [targetUser, setTargetUser] = useState(null);
  const [targetUserId, setTargetUserId] = useState(null);
  const [editModal, toggleEditModal] = useState(false);
  const _removeUser = (email) => {
    setUsers(users.filter((i) => i.email !== email));
  };
  const _likeUser = (email) => {
    let index = users.findIndex((x) => x.email == email);
    let _users = new Array(...users);
    if (_users[index]["isLiked"]) {
      _users[index]["isLiked"] = false;
    } else {
      _users[index]["isLiked"] = true;
    }
    setUsers(_users);
  };
  const _editUser = (email) => {
    let index = users.findIndex((x) => x.email == email);
    setTargetUserId(index);
    setTargetUser(JSON.parse(JSON.stringify(users[index])));
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
    let _users = new Array(...users);
    _users[targetUserId] = { ...targetUser };
    setUsers(_users);
    _hideModal();
  };

  return (
    <div className='user-cntnr'>
      {users.map((user, index) => (
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
