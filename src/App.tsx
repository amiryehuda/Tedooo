import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { AppWrapper, Header } from "./global-style";
import Feed from "./pages/Feed";
import data from "./assets/utils/data.json";
import ComingSoon from "./components/ComingSoon/ComingSoon";

const App = () => {
  return (
    <AppWrapper>
      <Header>
        <Navbar userImage={data.data[1].avatar} />
      </Header>
      <div style={{ paddingTop: "8vh" }}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route
            path="/messages"
            element={<ComingSoon pageName="messages" />}
          />
          <Route
            path="/notifications"
            element={<ComingSoon pageName="notifications" />}
          />
        </Routes>
      </div>
    </AppWrapper>
  );
};

export default App;
