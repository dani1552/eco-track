import GlobalStyle from "/src/styles/GlobalStyle.js";
import Router from "/src/Router.jsx";
import { useEffect } from "react";
import { auth } from "/src/firebase.js";

function App() {
  const init = async () => {
    await auth.authStateReady();
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
