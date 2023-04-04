import { Component, Match, Show, Switch, createSignal } from "solid-js";

import logo from "./assets/vols.png";
import styles from "./App.module.css";
import { Slider } from "./components/Slider/Slider";
import { setSettingsStore, settingsStore } from "./settings";

const App: Component = () => {
  return (
    <div
      style={{
        width: "80%",
        margin: "0 auto",
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        gap: "2rem",
      }}
    >
      {/* Single Slider */}
      <p>Single</p>
      <Slider
        value={settingsStore.single}
        min={0}
        max={100}
        step={1}
        onChange={(value) => setSettingsStore("single", value)}
      />
      {/* Multiple Sliders */}
      <p>Multiple</p>
      <Slider
        value={settingsStore.multiple}
        min={0}
        max={100}
        step={1}
        onChange={(value) => setSettingsStore("multiple", value)}
      />
    </div>
  );
};

export default App;
