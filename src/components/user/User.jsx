import React from 'react';
import * as userStyles from './user.module.css';
import { user } from '../../data/user';

function User() {
  return (
    <div className={userStyles.wrapper}>
      <img src="/photo.png" alt={user.name} />
      <h2>Hello ! {user.name}</h2>
      <p className={userStyles.welcome}>Welcome Back To Your Insurance Portal</p>
      <p className={userStyles.plan}>
        Your Plan : <span>{user.plan}</span>
      </p>
    </div>
  );
}

export default User;
