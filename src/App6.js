import React from "react";
import {Routes, Route, NavLink, Outlet, useParams, Navigate} from "react-router-dom";

function App5() {
  return (
    <>
      <h1>App Layout</h1>
      <NavLink to="/users">Users List Page</NavLink>
        <Routes>
          <Route path="/users" element={<Users />} >
            <Route index element={<UsersListPage />} />
            <Route path=":userId">
              <Route index element={<Navigate to="profile" />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="edit" element={<EditUserPage />} />
              <Route path="*" element={<Navigate to="profile" />} />
            </Route>
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

function Users() {
  return (
    <div>
      <h1>Users Layout</h1>
      <NavLink to="/">Home Page</NavLink>
      <Outlet />
    </div>
  );
}

function UserProfile() {
  const { userId } = useParams();
  return (
    <div>
      <h1>User {userId} Page</h1>
      <div><NavLink to="/users">Users List Page</NavLink></div>
      <div><NavLink to={`/users/${userId}/edit`} >Edit User Page</NavLink></div>
      <p>This is profile for user {userId}</p>
    </div>
  );
}
function EditUserPage() {
  const { userId } = useParams();
  const anotherUserId = Number(userId) + 1;
  return (
    <div>
      <h1>Edit User {userId} Page</h1>
      <div><NavLink to={`/users/${userId}/profile`} >User Profile Page</NavLink></div>
      <div><NavLink to={`/users/${anotherUserId}/profile`} >Another User</NavLink></div>
      <div><NavLink to="/users">Users List Page</NavLink></div>
    </div>
  );
}

function UsersListPage() {
  return (
    <div>
      <h1>Users List Page</h1>
      <ul>
        <li><NavLink to="/users/1">User 1</NavLink></li>
        <li><NavLink to="/users/2">User 2</NavLink></li>
        <li><NavLink to="/users/3">User 3</NavLink></li>
        <li><NavLink to="/users/4">User 4</NavLink></li>
        <li><NavLink to="/users/5">User 5</NavLink></li>
      </ul>
    </div>
  );
}

export default App5;