import React, { useState, useEffect, useContext, useRef } from "react";
import { ThemeContext } from "../context";
import Todos from "./Todos";

const Popup = () => {
  console.log("POPUP");
  // State
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //   Context
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
    <div
      className="popup"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <Todos isLoading={isLoading} posts={posts} />
    </div>
  );
};

export default React.memo(Popup);
