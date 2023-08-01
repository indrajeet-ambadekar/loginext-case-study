import React from "react";
import { Column } from "elysium-cloud-ui";
export default ({ user, removeUser, likeUser, editUser }) => {
  return (
    <Column md={3}>
      <div className='user-card'>
        <div className='avatar-cntnr'>
          <img
            src={`https://avatars.dicebear.com/v2/avataaars/${user?.login?.username}.svg?options[mood][]=happy`}
          />
        </div>
        <div className='info-cntnr'>
          <div className='row person-name'>
            {user?.name?.first} {user?.name?.last}
          </div>
          <div className='row light'>
            <i className='fas fa-envelope' />
            {user?.email}
          </div>
          <div className='row light'>
            <i className='fas fa-phone' />
            {user?.cell}
          </div>
          <div className='row light'>
            <i className='fas fa-globe' />
            http://www.google.com
          </div>
        </div>
        <div className='btn-cntnr'>
          <Column md={4}>
            <button onClick={() => likeUser(user.id.value)}>
              <i className={`${user.isLiked ? "fas" : "far"} fa-heart heart`} />
            </button>
          </Column>
          <Column md={4}>
            <button onClick={() => editUser(user.id.value)}>
              <i className='fas fa-pencil-alt' />
            </button>
          </Column>
          <Column md={4}>
            <button onClick={() => removeUser(user.id.value)}>
              <i className='fas fa-trash-alt' />
            </button>
          </Column>
        </div>
      </div>
    </Column>
  );
};
