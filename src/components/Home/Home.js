import React, { useEffect, useState } from "react";
import Friend from "../../components/Friend/Friend";

const Home = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) =>
        // console.log(data)
        setFriends(data)
      );
  }, []);
  return (
    <div>
      <h1>This is Basic React Routing</h1>
      <h2>Number of friends: {friends.length}</h2>
      {friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
};

export default Home;
