import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Friend.css";

const Friend = (props) => {
  const { name, email, id } = props.friend;
  const history = useHistory();
  const handleClick = (id) => {
    const url = `/friend/${id}`;
    history.push(url);
  };

  return (
    <div className="friendStyle">
      <h2>name: {name}</h2>
      <p>email: {email}</p>
      {/* two way to switch from one page to another page using Dynamic Routiing: */}
      {/* 1. <Link></Link>  */}
      {/* 2. useHistory() by button handler */}
      <Link to={`/friend/${id}`}>show detail of {id}</Link>
      <br /> <br />
      <button onClick={() => handleClick(id)}>show detail of {id}</button>
    </div>
  );
};

export default Friend;
