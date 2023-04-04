import { createStore } from "solid-js/store";

export const [settingsStore, setSettingsStore] = createStore<any>({
  single: 42,
  multiple: [0, 69],
});
