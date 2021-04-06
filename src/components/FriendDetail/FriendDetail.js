import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const FriendDetail = () => {
  let { friendId } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div>
      <h2>friend detail</h2>
      {/* <p>friend Id: {friendId}</p> */}
      <h3>name: {friend.name}</h3>
      <p>email: {friend.email}</p>
      <p>number: {friend.phone}</p>
      <p>website: {friend.website}</p>
    </div>
  );
};

export default FriendDetail;
