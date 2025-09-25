import React from "react";

const Cards = ({ users }) => {
  console.log(users);

  return (
    <div className="cards-container">
      {users.map((user) => (
        <div className="github-card" key={user.id}>
          <img className="avatar" src={user.avatar_url} alt={user.login} />
          <div className="card-content">
            <h2 className="username">{user.login}</h2>
            <p>ID: {user.id}</p>
            <p>Type: {user.type}</p>
            <p>Site Admin: {user.site_admin ? "Yes" : "No"}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              View Profile
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
