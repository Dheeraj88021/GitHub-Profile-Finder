import { useEffect, useState } from "react";
import User from "./Card";
import "./Style.css";

export default function GithubProfileFinder() {
  const [userName, SetUserName] = useState("Dheeraj88021");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleSubmit() {
    fetchUserData();
  }

  async function fetchUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      SetUserName("");
    }
    console.log(data);
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return <h1>fetching the data Please Wait....</h1>;
  }

  return (
    <>
      <div class="bg">
        <div class="glass">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
      </div>

      <div className="github">
        <div className="input">
          <input
            type="text"
            value={userName}
            name="search-by-userName"
            placeholder="Search Github UserName..."
            onChange={(event) => SetUserName(event.target.value)}
          />

          <button onClick={handleSubmit}>Search</button>
        </div>
        {userData != null ? <User user={userData} /> : null}
      </div>
    </>
  );
}
