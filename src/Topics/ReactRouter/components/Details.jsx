import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();

  return (
    <div className="profile-details">
      <div className="profile-card">
        <img
          src={state.users.avatar_url}
          alt={state.login}
          className="avatar"
        />

        <h2 className="username">{state.login}</h2>
        <p className="user-type">
          Type: <span>{state.users.type}</span>
        </p>

        <div className="links">
          <a
            href={state.users.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 GitHub Profile
          </a>
          <a
            href={state.users.followers_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            👥 Followers
          </a>
          <a
            href={state.users.following_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            ➕ Following
          </a>
          <a
            href={state.users.repos_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            📦 Repositories
          </a>
          <a
            href={state.users.organizations_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            🏢 Organizations
          </a>
          <a
            href={state.users.subscriptions_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            🔔 Subscriptions
          </a>
        </div>

        <div className="footer">
          {/* <p>ID: {state.users.id}</p> */}
          <p>Node ID: {state.users.node_id}</p>
          <p>Admin: {state.users.site_admin ? "Yes" : "No"}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
