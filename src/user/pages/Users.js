import React, { useState } from "react";
import UsersList from "../components/UsersList";

const DUMMY_USERS = [
  // {id: 'u1', image: 'http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg', name: 'cat', places: 2 },
  // {id: 'u2', image: 'https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg', name: 'dog', places: 3 },
  // {id: 'u3', image: 'https://t1.daumcdn.net/cfile/tistory/225A6838583BD03E13', name: 'rabbit', places: 1 },
]

const Users = () => {
  return (
    <div>
      <UsersList users={DUMMY_USERS} />
    </div>
  );
}

export default Users;