import React, { useState, useEffect } from "react";

const Greeting = () => {
  const [firstName, setFirstName] = useState(
    () => window.localStorage.getItem("hooksFirstName") || ""
  );
  const [lastName, setLastName] = useState(() =>
    window.localStorage.getItem("hooksLastName") || ""
  );

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);

  useEffect(() => {
    window.localStorage.setItem("hooksFirstName", firstName);
    window.localStorage.setItem("hooksLastName", lastName);
  }, [firstName, lastName]);

  return (
    <div>
      <input value={firstName} onChange={handleFirstNameChange} />
      <br />
      <input value={lastName} onChange={handleLastNameChange} />
      <p>
        Hello,{" "}
        <span>
          {firstName} {lastName}
        </span>
      </p>
    </div>
  );
};

export default Greeting;
