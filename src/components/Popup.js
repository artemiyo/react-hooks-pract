import React, { useState, useEffect, useContext } from "react";
import {ThemeContext} from '../context';


const Popup = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setPosts(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ul style={{ background: theme.background, color: theme.foreground }} className="popup">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        posts.map((post) => {
          return (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          );
        })
      )}
    </ul>
  );
};

export default Popup;
