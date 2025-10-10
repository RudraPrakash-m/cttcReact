import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Card = ({ users }) => {

  const navigate = useNavigate()
  const location = useLocation()

  const viewDetails=(users)=>{
    navigate(`/view_profile/${users.id}`, {state:{users, location}})
  }
  return (
    <div className="card">
      <img src={users.avatar_url} alt={users.login} className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{users.login}</h2>
        <p className="card-text">
          <span>User ID:</span> {users.id}
        </p>
        <p className="card-text">
          <span>Type:</span> {users.type}
        </p>
        <button onClick={()=>viewDetails(users)}>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
