import React, { useState, useEffect, useContext, useRef } from "react";
import { ThemeContext } from "../context";
import Todos from "./Todos";
import Input from "./Input";

const Popup = () => {
  // State
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [todo, setTodo] = useState({
    title: "",
    body: "",
  });
  //   Refs
  const titleInputRef = useRef(null);
  const bodyInputRef = useRef(null);
  const submitBtnRef = useRef(null);
  //   Context
  const theme = useContext(ThemeContext);

  useEffect(() => {
    titleInputRef.current.focus();
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

  const onKeyTitle = (e) => {
    if (e.key === "Enter") bodyInputRef.current.focus();
  };

  const onKeyBody = (e) => {
    if (e.key === "Enter") submitBtnRef.current.focus();
  };

  const onKeySubmit = (e) => {
    e.preventDefault();
    alert(`${todo.title} ${todo.body}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setTodo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div
      className="popup"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <div>
        <Input
          onChange={handleChange}
          onKeyDown={onKeyTitle}
          type="text"
          placeholder="Title"
          value={todo.title}
          ref={titleInputRef}
          name="title"
        />
        <Input
          onChange={handleChange}
          onKeyDown={onKeyBody}
          type="text"
          placeholder="Description"
          value={todo}
          ref={bodyInputRef}
          name="body"
        />
        <button onKeyDown={onKeySubmit} ref={submitBtnRef}>
          Submit
        </button>
      </div>
      <Todos isLoading={isLoading} posts={posts} />
    </div>
  );
};

export default Popup;
