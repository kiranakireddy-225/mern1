import React from "react";

const Homepage = ({ user, onLogout }) => {
  return (
    <div>
      <h1>Welcome, {user?.name || "Guest"}!</h1>
      {user ? (
        <>
          <p>You are logged in with email: {user.email}</p>
          <button onClick={onLogout}>Logout</button>
        </>
      ) : (
        <p>Please log in or register to access more features.</p>
      )}
    </div>
  );
};

export default Homepage;
