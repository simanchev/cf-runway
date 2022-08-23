import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';

function Profile() {
const state = useSelector((st) => st.auth);
  console.log(state);
  return (
    <>
      <Header />
      <div>Profile
        <p>{state.name}</p>
      </div>
    </>
  );
}
export default Profile;

// доделать модалку
// сделать личный кабинет!! 20%
// пользователь криво летит в стейт, нужно сделать проверки
//  подружить с миддлваркой resLocals
