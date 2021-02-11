import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const Posts = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  // let { id } = useParams();

  const fetchItems = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  // console.log(id);
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h1>
            {item.title}
            <Link to={`/posts/${item.id}/comments`}>
              <button>Show Comments</button>
            </Link>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Posts;
