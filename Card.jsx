export default function User({ user }) {
  const {
    avatar_url,
    bio,
    followers,
    public_repos,
    name,
    location,
    twitter_username,
    email,
    login,
    created_at,
  } = user;

  let check = "Not Available";
  const CreatedData = new Date(created_at);
  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avter" alt="User" />
      </div>
      <div className="conatiner">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          User Joined on
          {`  ${CreatedData.getDate()}   ${CreatedData.toLocaleDateString(
            "en-us",
            {
              month: "short",
            }
          )} ${CreatedData.getFullYear()}`}
        </p>
      </div>
      <div>
        <div className="info">
          <p>Name : </p>
          <p>{name}</p>
        </div>
        <div className="info">
          <p>Public Repository : </p>
          <p>Total ({public_repos})</p>
        </div>

        <div className="info">
          <p>You'r Follwers : </p>
          <p>{followers}</p>
        </div>
        <div className="info">
          <p
            style={{
              marginTop: "5px",
              fontSize: "25px",
            }}
          >
            Bio
          </p>
          <p>{bio}</p>
        </div>

        <div className="info">
          <p>Locations : </p>
          <p>{`${location}`}</p>
        </div>
        <div className="info">
          <p>Twitter Id : </p>
          <p>{`${twitter_username} `}</p>
        </div>
        <div className="info">
          <p>Email Id : </p>

          <p>{`${email} || ${check} `}</p>
        </div>
      </div>
    </div>
  );
}
