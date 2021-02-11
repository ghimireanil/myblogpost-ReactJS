import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Comments = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  let { id } = useParams();

  const fetchItems = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/comments/${id}`
    );
    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <div>{Object.keys(items).length > 0 ? <div>{items.body}</div> : null}</div>
  );
};

export default Comments;
