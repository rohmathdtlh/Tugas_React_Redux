// src/components/UserComponent.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../slices/userSlice"; 

function UserComponent() {
  const userData = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      {userData.map((user) => (
        <div key={user.id}>
          <span>Name: {user.name}</span>
          <span>Email: {user.email}</span>
        </div>
      ))}
    </div>
  );
}

export default UserComponent;
