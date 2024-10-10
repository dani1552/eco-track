import { auth } from "/src/firebase/firebase.js";

function LogoutButton() {
  const logOut = () => {
    auth.signOut();
  };

  return (
    <h1>
      <button onClick={logOut}>Logout</button>
    </h1>
  );
}

export default LogoutButton;
