import React from "react";

const Todos = ({ isLoading, posts }) => {
  console.log("TODOS")
  return (
    <ul>
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

export default React.memo(Todos);
