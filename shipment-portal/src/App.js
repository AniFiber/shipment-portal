import { useState } from "react";
import Login from "./Login";

import Dashboard from "./Dashboard";

function App() {
  // state is just like creating a variable but in a react way

  // for User Authentication (whether logged in or not)
  const [auth, setAuth] = useState(false);
  // for storing search results/shipments
  const [data, setData] = useState([]); // set shipment data

  if (!auth) {
    // If not logged in show Login Page/Component
    return <Login loginUser={setAuth} />;
  }
  // if login then Dashboard
  return (
    <>
      <Dashboard data={data} setData={setData} logout={() => setAuth(false)} />
    </>
  );
}

export default App;
