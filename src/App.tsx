import type { Component } from "solid-js";

import { VideoPlayer } from "./components/VideoPlayer/VideoPlayer";

import "./App.css";

const App: Component = () => {
  return (
    <div class="App">
      <main>
        <VideoPlayer />
      </main>
    </div>
  );
};

export default App;
