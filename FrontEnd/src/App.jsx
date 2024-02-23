import React, { Suspense } from "react";
import Routes from "./routes";

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>} />
      <Routes />
    </div>
  );
};

export default App;
