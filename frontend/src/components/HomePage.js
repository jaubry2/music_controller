import React, { Component } from "react";
import { render } from "react-dom";
import JoinRoomPage from "./JoinRoomPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter, Routes, Route, Link, Redirect } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<p>Dzafza</p>} />
          <Route path="join" element={<JoinRoomPage />} />
          <Route path="create" element={<CreateRoomPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default HomePage;
