import React, { useState, useEffect } from 'react';

const Users = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <div>
      {items.map((item) => (
        <ul>
          Name: {item.name}
          <li>Email: {item.email}</li>
          <li>Website: {item.website}</li>
          <li>City:{item.address.city}</li>
        </ul>
      ))}
    </div>
  );
};

export default Users;
